import React from 'react';
import SearchResultContainer from './search_result_container';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.fetchSearchResults = this.props.fetchSearchResults;
    this.debouncedSearch = this._debounce(this.fetchSearchResults, 300)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value }, 
    () => {
      if (this.state.query.length > 0) {
        this.debouncedSearch(this.state);
      }
    })
  }

  _debounce(func, wait) {
    let timeout;

    return (...args) => {  // array of one object
      const context = this;
      const delayedFunc = () => {
        timeout = null;
        func.apply(context, args);
      }

      clearTimeout(timeout);
      timeout = setTimeout(delayedFunc, wait);
    }
  }

  render() {

    return(
      <nav className='search-component'>
        <input className='search-input' 
          type="search" 
          value={this.state.search}
          onChange={this.handleChange}/>
        <SearchResultContainer />
      </nav>
    )
  }


}

export default Search;