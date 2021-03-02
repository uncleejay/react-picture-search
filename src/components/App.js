import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component{
    onSearchSubmit(term){
    // this get function is going to take two separate arguments
    // the first argument will be the address 
    // the second will be a bunch of objects to customize the request
        axios.get('https://api.unsplash.com/search/photos',  {
            // params specify the different query string parameters we 
            // want to add to this request
            params: { query: term },
            headers: {
                Authorization: 'Client-ID re_IAYP9rMuY2oERwBskG8brW8OgqNBuNyrhpMEShOs'
            }
        });
    }


    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;