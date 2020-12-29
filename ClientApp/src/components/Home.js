import React, { Component } from 'react';
import ApiClient from './../../src/utils/api-client';
import InfiniteLoader from './infiniteScroller';
import RepoElement from './RepoElement';
import Loading from './Loading';
import PageHelper from '../utils/pageHelper';


export class Home extends Component {
    constructor(props) {
        super(props)
        var date = new Date();
        console.log(date);
        this.state = {
            data: [],
            incompleteResult: false,
            date: new Date(date.getFullYear(), date.getMonth() - 1, date.getDate() + 1).toISOString().slice(0, 10),
        }
    }

    loadMore = (page) => {
        console.log(page)
        ApiClient.get(`https://api.github.com/search/repositories?q=created:>${this.state.date}&sort=stars&order=desc&page=${page} `, {})
            .then(response => {

                var updatingData = this.state.data;
                response.data.items.forEach(e => updatingData.push(e));

                this.setState({
                    data: updatingData,
                    incompleteResult: response.data.incomplete_results,
                })
            })
            .catch(error => {
                alert(error);
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
                    Stars={PageHelper.NumberInKs(Repo.stargazers_count)}
                    Issues={PageHelper.NumberInKs(Repo.open_issues_count)}
                    PushDate={Repo.pushed_at}
                    UserName={Repo.owner.login}
                />
            )
        });
        return ListCards;
    }

    render() {
        var ListCards = this.renderRepoElements();
        return (

            <InfiniteLoader
                LoadMore={page => this.loadMore(page)}
                Length={this.state.data.length}
                HasMore={true}
                Loader={<Loading />}
                UseWindow={true}
                Data={ListCards}
                StartPage={1}
            >
            </InfiniteLoader>

        );
    }
}
