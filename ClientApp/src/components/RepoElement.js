import React from 'react';
import { Card } from '@material-ui/core';
import { Chip } from '@material-ui/core';


export default class RepoElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <Card id={this.props.id} style={{ marginBottom: "5px" }}>
                <div className="row">
                    <span id={this.props.id + "img"} className="column" >
                        <img
                            style={{ width: "130px", height: "130px", marginBottom: "5px", marginTop: "5px", marginRight: "5px", marginLeft: "5px" }}
                            src={this.props.Avatar}
                        />
                    </span>
                    <span id={this.props.id + "data"} className="column" style={{
                        width: "800px", height: "140px",
                    }}>
                        <div style={{ fontWeight: 700, wordWrap: "breakWord" }}>
                            {this.props.Name}
                        </div>
                        <div >
                            {this.props.Discription}
                        </div>
                        <span>
                            <Chip label={"Stars: " + this.props.Stars} variant="outlined" />
                            <Chip label={"Issues: " + this.props.Issues} variant="outlined" />

                        </span>
                    </span>
                </div>
            </Card>
        );
    }
}