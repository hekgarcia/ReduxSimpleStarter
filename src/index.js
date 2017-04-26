import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBiS7_Z_x13vq-yKttwuzQDuI6uRndR8q0";

YTSearch({key : API_KEY, term : 'macross'}, function(data) { console.log(data)})


const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
    
}
 
ReactDOM.render(
 <App/> , document.querySelector('.container'));
