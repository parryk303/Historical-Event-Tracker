import React from 'react';
import Search from './components/Search.jsx';
import EventList from './components/EventList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      term: '',
      pageCount: 0
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getInitialPageAndCount() {
    axios
      .get('http://localhost:3000/events?_page=1')
      .then(data => {
        let pcount = data.headers['x-total-count'] / 10;
        this.setState({ items: data.data, pageCount: pcount });
      })
      .catch(err => {
        console.log(
          'There is an error in retrieving first page of items on component mount: ',
          err
        );
      });
  }

  componentDidMount() {
    this.getInitialPageAndCount();
  }

  handlePageClick(data) {
    let term = '';
    let page = data.selected + 1;

    if (this.state.term === '') {
      term = `http://localhost:3000/events?_page=${page}`;
    } else {
      let queryWord = this.state.term;
      term = `http://localhost:3000/events?q=${queryWord}&_page=${page}`;
    }

    axios
      .get(term)
      .then(data => {
        this.setState({ items: data.data });
      })
      .catch(err => {
        console.log(
          'An error occurred when attempting to request new page information from json server: ',
          err
        );
      });
  }

  search(term) {
    axios
      .get(`/events?q=${term}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          items: response.data
        });
      })
      .catch(err => console.error(err));
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <div className='main'>
        <div id='head'>
          <h1 id='title'> Search Through History </h1>
          <Search
            onSearch={this.search}
            onChangeDetect={this.handleChange}
            term={this.state.term}
          />
        </div>
        <EventList
          pageCount={this.state.pageCount}
          items={this.state.items}
          handlePageClick={this.handlePageClick}
        />
      </div>
    );
  }
}

export default App;