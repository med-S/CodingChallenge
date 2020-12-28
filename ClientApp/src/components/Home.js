import React, { Component } from 'react';
import ApiClient from './../../src/utils/api-client';
import InfiniteLoader from './infiniteScroller';
import RepoElement from './RepoElement';
import Loading from './Loading';


export class Home extends Component {
    // static displayName = Home.name;
    constructor(props) {
        super(props)
        this.state = {
            PageNum: 1,
            data: [],
            incompleteResult: false
        }
    }

    componentDidMount() {

        this.loadMore(0);

    }

    loadMore = (page) => {
        ApiClient.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page} `, {})
            .then(response => {

                var updatingData = this.state.data;
                response.data.items.forEach(e => updatingData.push(e));

                this.setState({
                    PageNum: this.state.PageNum + 1,
                    data: updatingData,
                    incompleteResult: response.data.incomplete_results,
                })
            })


    };

    renderRepoElements = () => {
        var ListCards = [];
        this.state.data.map((Repo, i) => {
            ListCards.push(
                <RepoElement
                    id={i}
                    Name={Repo.name}
                    Avatar={Repo.owner.avatar_url}
                    Discription={Repo.description}
                    Stars={Repo.stargazers_count}
                    Issues={Repo.open_issues_count}
                    PushDate={Repo.pushed_at}
                />
            )
        })
        return ListCards;
    }

    render() {
        var ListCards = this.renderRepoElements();
        return (
            (this.state.data.length > 0 ?
                <InfiniteLoader
                    LoadMore={(page) => this.loadMore(page)}
                    Length={this.state.data.length}
                    HasMore={this.state.incompleteResult}
                    Loader={<Loading />}
                    UseWindow={true}
                    Data={ListCards}
                >
                </InfiniteLoader>
                :
                <Loading Center={true} />
            )
        );
    }
}
