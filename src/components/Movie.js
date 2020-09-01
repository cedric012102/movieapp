import React from 'react';
import Comment from './comment';
import StarRating from './Stars';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blackPantherComments: ['This was awesome!'],
            spiderManComments: ["I enjoyed it!", "It was alright."],
            thorComments: [],
            newBlackPantherComment: "",
            newSpiderManComment: "",
            newThorComment: ""

        }
      }
        handleBlackPantherComment = (e) => {
            this.setState({newBlackPantherComment: e.target.value})
      }

        handleSpiderManComment = (e) => {
            this.setState({newSpiderManComment: e.target.value})
    }

        handleThorComment = (e) => {
            this.setState({newThorComment: e.target.value})
    }

        blackPantherSubmit = () => {
            let allComments = [...this.state.blackPantherComments, this.state.newBlackPantherComment]
            this.setState({blackPantherComments: allComments})
            this.setState({newBlackPantherComment: ""})
        }

        spiderManSubmit = () => {
            let allComments = [...this.state.spiderManComments, this.state.newSpiderManComment]
            this.setState({spiderManComments: allComments})
            this.setState({newSpiderManComment: ""})
        }

        thorSubmit = () => {
            let allComments = [...this.state.thorComments, this.state.newThorComment]
            this.setState({thorComments: allComments})
            this.setState({newThorComment: ""})
        }
  render(){
     
    return (
    <div className="movieNames">
            <div>
            <h1>Black Panther</h1>
            <img className="movieSizes" alt="Photo of Black Panther" src={"https://ae01.alicdn.com/kf/HTB1Tiutcb5YBuNjSspoq6zeNFXa1/Custom-Canvas-Wall-Decor-Black-Panther-Poster-Black-Panther-Wallpaper-Chadwick-Boseman-Wall-Stickers-Office-Mural.jpg"}/>
            <Comment  movieArray={this.state.blackPantherComments}/>
            <input value={this.state.newBlackPantherComment} type="text" onChange={this.handleBlackPantherComment}/>
            <button onClick={this.blackPantherSubmit}>Submit Review</button>
            <StarRating />
            </div>
            <div>
            <h1>Spider-Man</h1>
            <img className="movieSizes" alt="Pic of Spider-Man" src={"https://wallpaperaccess.com/full/1123787.jpg"}/>
            <Comment  movieArray={this.state.spiderManComments}/>
            <input value={this.state.newSpiderManComment} type="text" onChange={this.handleSpiderManComment}/>
            <button onClick={this.spiderManSubmit}>Submit Review</button>
            </div>
            <div>
            <h1>Thor</h1>
            <img className="movieSizes" alt="Pic of Thor" src={"https://7wallpapers.net/wp-content/uploads/7_Thor-Ragnarok.jpg"}/>
            <Comment  movieArray={this.state.thorComments}/>
            <input value={this.state.newThorComment} type="text" onChange={this.handleThorComment}/>
            <button onClick={this.thorSubmit}>Submit Review</button>
            </div>
    </div>
        )
  }
} 