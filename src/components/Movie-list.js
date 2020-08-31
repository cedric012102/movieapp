import React from 'react';
import Post from './post';

let e = React.createElement;

export default class MovieList extends React.Component {
    render() {
        return (
            <div className='container'>
                <Post />
                <Post />
            </div>
        );
    }
}