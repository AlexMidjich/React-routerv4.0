import React, { Component } from 'react';

class Page extends Component{

  constructor(props) {
    super(props);

    this.state={};
    this.submitHome = this.submitHome.bind(this);
  }

  submitHome(){
    console.log('Button Clicked!')
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <h2>I am a route!</h2>
        <button className="btn btn-primary" onClick={this.submitHome}>Go Home!</button>
      </div>
    )
  }
}

export default Page;
