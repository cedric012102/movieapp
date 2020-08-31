import React from 'react';
import StarRating from './components/Stars';

let e = React.createElement;

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content
        }

render() 

let tempComments = this.state.comments;
setTimeout(() => this.setState({content: 'state updated', comments: []}, setTimeout(() => this.setState({comments: tempComments}), 2000)), 2000);
let comments;
if (this.state.comments) {
    comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />);
    }
return (
    <div className="card w-75">
        <div className="card-header bg-primary text-white">
            Username and Time
        </div>
        <div className="card-body">
            {this.state.content}
        </div>
        <div className="card-footer">
            <StarRating />
            {comments}
        </div>
    </div>
        );
    }
}