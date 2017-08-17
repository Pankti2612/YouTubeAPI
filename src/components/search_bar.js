import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {search:''};
    }
    render(){
        return(
            <div className="search-bar">
            <input 
                value={this.state.search} 
                onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(search){
        debugger;
        console.log(search);
        this.setState({search});
        this.props.onSearchTermChange(search);
    }
};

export default SearchBar;