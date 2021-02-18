import React from 'react';

import Card from 'react-bootstrap/Card';

class EventList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='main'>
        {this.props.items.map((item, i) => {
          return (
            <Card className="card" key={i}>
              <blockquote className="blockquote mb-0">
                <p> {item.description} </p>
                <footer className="blockquote-footer">
                  {item.date}
                  {', '}
                  {item.category2}
                </footer>
              </blockquote>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default EventList;