import React from 'react';
import ReactPaginate from 'react-paginate';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    this.props.onSearch(this.props.term);
  }

  render() {
    return (
      <div id="search">
        <div className="box">
          <input className="search" value={this.props.term} onChange={this.props.onChangeDetect} />
          <button className="search" onClick={this.search}>Find Results</button>
          <div className="center" style={{ align: 'middle' }}>
          <ReactPaginate
            previousClassName={'previous'}
            nextClassName={'next'}
            pageClassName={'pageClass'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.props.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Search;