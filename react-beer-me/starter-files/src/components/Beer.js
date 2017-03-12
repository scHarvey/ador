import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slugify';

class Beer extends  React.Component{
  static propTypes = {
    //details: React.PropTypes.object
  }

  render(){
    /*
    We can only return one element, though it can have children.
    Comments count as an element.
    Hence, if you want to return multiple things wrap them in a container.
    */
    //destructuring
    const { name, labels, id } = this.props.details;
    const image = labels ? labels.medium : 'notfound.jpg';

    return (
      <div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
          <h2>{ name }</h2>
          <br />
          <img src={ image } alt={ name } />
        </Link>
      </div>
    )
  }



}

export default Beer;
