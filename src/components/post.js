import React from 'react';
import StarRating from './Stars';
export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content
        }
      }
  render(){
   
    return (
        <div className="cards">
    <div className="cardContainer card w-75">
        <div className="card-header bg-primary text-white">
            Black Panther
        </div>
        <div className="card-body">
            {this.state.content}
        </div>
        <div className="card-footer">
            <StarRating />
            {this.state.comments}
        </div>
    </div>

<div className="cardContainer card w-75">
<div className="card-header bg-primary text-white">
    Spider-Man
</div>
<div className="card-body">
    {this.state.content}
</div>
<div className="card-footer">
    <StarRating />
    {this.state.comments}
</div>
</div>

<div className="cardContainer card w-75">
<div className="card-header bg-primary text-white">
    Thor
</div>
<div className="card-body">
    {this.state.content}
</div>
<div className="card-footer">
    <StarRating />
    {this.state.comments}
</div>
</div>
</div>
        )
  }
} 

//Review List Container