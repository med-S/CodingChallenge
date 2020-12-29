import React from 'react';
export default class Loading extends React.Component {

    render() {


        return (
            (this.props.Center ?
                <div className="loader" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", position: "absolute", top: "30%", fontWeight: 800 }}> Loading... </div>
                :
                <div className="loader" > Loading... </div>
            )
        );
    }
}