import React from 'react';

class Loader extends  React.Component{
  static propTypes = {
    message: React.PropTypes.string.isRequired

  }

  render(){
    /*
    We can only return one element, though it can have children.
    Comments count as an element.
    Hence, if you want to return multiple things wrap them in a container.
    */
      return (
        <div className="loader">
          <img src="/images/ball.svg" alt="Loading..." />
          <h2>{ this.props.message }</h2>
        </div>
      )
  }



}


export default Loader;
