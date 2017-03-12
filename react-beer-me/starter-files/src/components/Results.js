import React from 'react';
import Beer from './Beer';
import Loader from './Loader'


class Results extends  React.Component{
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    beers: React.PropTypes.array.isRequired
  }

  transitionTo() {
    this.context.router.push(`/search/${searchTerm}`);
  }

  render(){
    /*
    We can only return one element, though it can have children.
    Comments count as an element.
    Hence, if you want to return multiple things wrap them in a container.


    */
      return (
        <div className="beers">
            { this.props.beers.map(beer => <Beer key={ beer.id } details={beer} />) }

        </div>
      )
  }



}


export default Results;
