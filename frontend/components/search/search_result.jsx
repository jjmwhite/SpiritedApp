import React from 'react';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {

  // if no results and no errors, render nothing
  // if errors only, render one thing
  // if results, render all things
  render() {
    let li;
    if (this.props.results.length > 0 && this.props.errors.length === 0) {
      li = this.props.results.map( result => {
        return <Link to={`/bottles/${result.id}`} 
                      key={`search-${result.id}`}>
                      <li className='search-result'>{result.name}</li>
                </Link>
      })
    } else if (this.props.results === 0 && this.props.errors.length > 0) {
      li = this.props.errors.map( err => {
        return <Link to='/bottles/create' 
                      key='search-error'>
                        <li className='search-result'>{err}</li>
              </Link>
      })
    } else {
      li = null;
    }

    return(
      <ul id='search-results'>
        {li}
      </ul>
    )
  }
}

export default SearchResult;