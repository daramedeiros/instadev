import React from 'react';
import './Feed.scss';
import Post from './Post';

class Feed extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }
  componentDidMount(){
    console.log('Montou');
  }
    render() {
      const { users } = this.state;

        return(
        <div className="container">
          <section className="feed">
          {users.map((user) => <Post data={users}/>)}
          </section>
        </div>
        );
    }
}

export default Feed; 