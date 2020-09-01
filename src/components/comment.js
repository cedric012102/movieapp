import React from 'react';




export default class Comment extends React.Component {
    constructor(props) {
        super(props);
      }
      
    render() { 
        let newComments = this.props.movieArray.map((comment, index) => {
            return(
            <h3 className="reviews" key={index}>{comment}</h3>
            )
        })
        return (
            <div>
        {newComments}
            </div>
     );
   }
}

//Movie Reviews