import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';

const API_KEY = "AIzaSyBiS7_Z_x13vq-yKttwuzQDuI6uRndR8q0";




class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };
        
        YTSearch({key : API_KEY, term : 'macross'}, 
                 (videos) => { 
                    this.setState({ videos });
                    // this.setState( {videos: videos} );
                    //console.log(data)
                });    
    }
    
    render() {
        return  <div>
                    <SearchBar/>
                    <VideoList videos={this.state.videos} />
                </div>
    }
}
 
ReactDOM.render(
 <App/> , document.querySelector('.container'));
