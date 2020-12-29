import React from 'react';
import { Card } from '@material-ui/core';
import { Chip } from '@material-ui/core';
import PageHelper from '../../src/utils/pageHelper'

export default class RepoElement extends React.Component {
  

    render() {

        var timeInterval = PageHelper.DateDifferenceInDays(new Date(), this.props.PushDate);
        return (
            <Card id={this.props.id} style={{ marginBottom: "5px" }}>
                <div className="row" >
                    <span id={this.props.id + "img"} className="column sm-12 md-2 lg-2 xl-2 filled" >
                        <img
                            style={{ width: "130px", height: "130px", marginBottom: "5px", marginTop: "10px", marginRight: "5px", marginLeft: "5px" }}
                            src={this.props.Avatar}
                        />
                    </span>
                    <div id={this.props.id + "data"} className="column sm-12 md-10 lg-10 xl-10 filled" style={{
                        width: "800px", height: "140px", marginTop: "15px", overflowY: "auto", overflowX:"auto"
                    }}>
                        <div style={{ fontWeight: 700, wordWrap: "breakWord" }}>
                            {this.props.Name}
                        </div>
                        <div style={{ marginTop: "5px", marginBottom: "15px", height: "48px", overflowY:"auto" }}>
                            {this.props.Discription}
                        </div>
                        <span style={{ marginTop: "20px" }}>
                            <Chip label={"Stars: " + this.props.Stars} variant="outlined" />
                            <Chip label={"Issues: " + this.props.Issues} variant="outlined" />
                            <span style={{ marginLeft: "5px" }}>Submitted </span>
                            {(timeInterval > 0 ?
                                <span style={{ fontWeight: 500 }}>{timeInterval + " days ago "} </span>
                                :
                                <span style={{ fontWeight: 500 }}> today </span>
                            )}
                            <span>by </span>
                            <span style={{ fontWeight: 500 }}>{this.props.UserName}</span>
                        </span>
                    </div>
                </div>
            </Card>
        );
    }
}