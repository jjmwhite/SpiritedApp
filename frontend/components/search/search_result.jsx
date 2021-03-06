import React from 'react';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.resetSearch = this.resetSearch.bind(this);
  };

  resetSearch() {
    const ul = document.getElementById('search-results');
    ul.style.display = 'none';
    const lis = document.getElementsByClassName('search-result');
    Object.values(lis).forEach(li => {
      li.style.display = 'none';
    });
    const search = document.getElementById('search-input');
    search.value = '';
  };

  render() {
    let li;
    if (this.props.results.length > 0 && this.props.noResult.length === 0) {
      li = this.props.results.map( result => {
        return <Link to={`/bottles/${result.id}`} 
                     key={`search-${result.id}`}>
                     <li className='search-result'
                     onClick={this.resetSearch}
                     >{result.name}</li>
                </Link>
      });
    } else if (this.props.noResult.length > 0 && this.props.currentUser) {
      li = 
        <Link to='/bottles/create'
              key='search-error'>
              <li className='search-result'
              onClick={this.resetSearch}
              >{this.props.noResult[0]}</li>
        </Link>
    } else if (this.props.noResult.length > 0 && this.props.currentUser === false) {
      li =
        <a onClick={() => this.props.openSessionModal('login')}
          key='search-error'>
          <li className='search-result'
            onClick={this.resetSearch}
          >{this.props.noResult[0]}</li>
        </a>
    } else {
      li = null;
    };

    return(
      <ul id='search-results'>
        {li}
      </ul>
    )
  };
};

export default SearchResult;