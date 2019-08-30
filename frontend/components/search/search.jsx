import React from 'react';
import SearchResultContainer from './search_result_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };

    this.fetchSearchResults = this.props.fetchSearchResults;
    this.debouncedSearch = this._debounce(this.fetchSearchResults, 400)
    this.handleChange = this.handleChange.bind(this);
    this.resetSearchState = this.resetSearchState.bind(this);
    this.showResults = this.showResults.bind(this);
    this.hideResults = this.hideResults.bind(this);
  };

  resetSearchState() {
    this.setState( {query: ''}, () => this.hideResults());
  };

  showResults() {
    const ul = document.getElementById('search-results');
    ul.style.display = 'block';
    const lis = document.getElementsByClassName('search-result');
    Object.values(lis).forEach(li => {
      li.style.display = 'block';
    });
  };

  hideResults() {
    const ul = document.getElementById('search-results');
    ul.style.display = 'none';
    const lis = document.getElementsByClassName('search-result');
    Object.values(lis).forEach( li => {
      li.style.display = 'none';
    });
  };

  handleChange(e) {
    this.showResults();
    this.setState({ query: e.target.value }, 
    () => {
      if (this.state.query.length > 0) {
        this.debouncedSearch(this.state);
      } else {
        this.resetSearchState()
      };
    });
  };

  _debounce(func, wait) {
    let timeout;

    return (...args) => {  // array of one object
      const context = this;
      const delayedFunc = () => {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(delayedFunc, wait);
    };
  };

  render() {
    return(
      <nav className='search-component'>
        <i className="fas fa-search"></i>
        <input id='search-input' 
          type="search" 
          placeholder={'Search any Scotch'}
          autoComplete="off"
          value={this.state.search}
          onChange={this.handleChange}
          />
        <SearchResultContainer updateSearchState={this.updateSearchState}/>
      </nav>
    )
  };
};

export default Search;