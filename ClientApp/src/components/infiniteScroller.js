import React from "react";
import InfiniteScroll from 'react-infinite-scroll-loader-y'

export default class InfiniteLoader extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <InfiniteScroll
                dataLength={this.props.Length}
                startPage={this.props.StartPage}
                loadMore={this.props.LoadMore}
                hasMore={this.props.HasMore}
                loader={this.props.Loader}
                useWindow={this.props.UseWindow}
                loadFirstSetOnInit={true}
            //getScrollParent={() => this.scrollParentRef}
            >
                {this.props.Data}
            </InfiniteScroll>
        )
    }
}