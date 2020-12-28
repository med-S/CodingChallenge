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
                    pageStart={0}
                    loadMore={this.props.LoadMore}
                    hasMore={this.props.HasMore}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={this.props.UseWindow}
                    //getScrollParent={() => this.scrollParentRef}
                >
                    {this.props.Data}
                </InfiniteScroll>
      )
    }
}