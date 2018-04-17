import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';


const API_KEY = 'AIzaSyA_1f2d1fq1V0s2wEVZJCWji6PO5cCcdUk';

class App extends Component  {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'Surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return (
        <div>
            <SearchBar />
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                videos={this.state.videos} /> 
        </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));