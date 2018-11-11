import React from 'react';

export default class Two extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
            <div style = {{
              marginTop: '200px', border: '1px solid black', height: '200px', marginLeft: '150px',
            }}
              >
                this is Two
                <a href="#/home">This is two,Go Home</a>
                <button onClick={() => this.props.history.push('home')}>通过函数Go Home</button>
            </div>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {

  }
}
