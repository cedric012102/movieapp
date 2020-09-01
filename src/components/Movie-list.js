import React from 'react';
import Comment from './post';
import Movie from './Movie';

let e = React.createElement;

export default class MovieList extends React.Component {
    render() {
        return (
            <div className='container'>
                <Movie />
                <Comment />
            
            </div>
        );
    }
}