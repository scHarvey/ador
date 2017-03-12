import React from 'react';

class Header extends  React.Component{
  static propTypes = {
    siteName: React.PropTypes.string.isRequired

  }

  render(){
    /*
    We can only return one element, though it can have children.
    Comments count as an element.
    Hence, if you want to return multiple things wrap them in a container.
    */
      return (
        <div>
          {/*this is a comment*/}
          <h1>{ this.props.siteName }</h1>
        </div>
      )
  }



}


export default Header;
