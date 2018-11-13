import React from 'react';

export default class User extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
            <div style = {{
              marginTop: '200px', border: '1px solid black', height: '200px', marginLeft: '150px',
            }}
              >
                this is User
                <button onClick={() => this.props.history.push('home')}>通过函数Go Home</button>
            </div>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {

  }
}
