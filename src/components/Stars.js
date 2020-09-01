import React from 'react';



export default class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ratings: 0

        }
      }

    render() {
        return (
            <div>
                <img onClick={() => this.setState({ratings: 1})} className="starLogo" src={this.state.ratings >= 1 ? "/newstar.svg" : "/starpack.svg"} alt="Picture of star"/>
                <img onClick={() => this.setState({ratings: 2})} className="starLogo" src={this.state.ratings >= 2 ? "/newstar.svg" : "/starpack.svg"} alt="Picture of star"/>
                <img onClick={() => this.setState({ratings: 3})} className="starLogo" src={this.state.ratings >= 3 ? "/newstar.svg" : "/starpack.svg"} alt="Picture of star"/>
                <img onClick={() => this.setState({ratings: 4})} className="starLogo" src={this.state.ratings >= 4 ? "/newstar.svg" : "/starpack.svg"} alt="Picture of star"/>
                <img onClick={() => this.setState({ratings: 5})} className="starLogo" src={this.state.ratings >= 5 ? "/newstar.svg" : "/starpack.svg"} alt="Picture of star"/>
            </div>
        );
    }
}