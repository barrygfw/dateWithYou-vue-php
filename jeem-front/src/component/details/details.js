import React from 'react';

export default class Home extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
            <div style = {{ border: '1px solid black', height: '100px', width: '150px' }}>
                <a href="#/home/one">Go Home</a>this is Details
                <button onClick={() => this.props.history.push('home')}>通过函数Go Home</button>
            </div>
    );
  }
}
