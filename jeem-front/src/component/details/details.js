import React from 'react';

export default class Home extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
            <div style = {{ marginTop: '500px', border: '1px solid black', height: '200px' }}>
                <a href="#/home/one">Go Home</a>
                <button onClick={() => this.props.history.push('home')}>通过函数Go Home</button>
            </div>
    );
  }

  componentDidMount() {
    console.log(this.props.match.params);
  }
}
