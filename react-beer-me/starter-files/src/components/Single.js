import React from 'react';
import Header from './Header'

class Single extends  React.Component{
  constructor() {
      super(); //constructs the react component before we actually extend it
      this.state = {
        beer: {},
        loading: true
      }
  }

  static propTypes = {

  }

  componentWillMount() {
    this.loadBeer();
  }

  loadBeer = () => {
    //set loading state to trigger loading animation
    this.setState({loading: true});

    const beerID = this.props.match.params.beerId
    console.log('beerID = ' + beerID);
    // Check for beers in local storage
    const localStorageBeer = localStorage.getItem(`beer-${beerID}`);
    if (localStorageBeer) {
      console.log("Local");
      const localBeer = JSON.parse(localStorageBeer);
      console.log(localBeer);
      this.setState({ beer: localBeer, loading: false });
    } else {
      fetch(`http://api.react.beer/v2/beer/${beerID}`)
      .then(data => data.json())
      .then((beer) => {
        console.log("Remote");
        console.log(beer.data);

        this.setState({ beer: beer.data, loading: false });
        console.log(beer.data);
        // save to local storage in case we search for this again
        localStorage.setItem(`beer-${beerID}`, JSON.stringify(beer.data));
      })
      .catch(err => console.error(err));
    }
  }

  renderLabel = (beer) => {
    console.log('label');
    console.log(beer);
/*
    const image = !!beer.labels.large ? beer.labels.large : 'notfound.jpg';
    return (
      <div><img src={image} alt={beer.name} /></div>
    );
*/
  }

  renderGlass = (beer) => {
    const glass = beer.glass;


    if (glass !== undefined) {
      return (
        <div>
          <img className="glass" src={`/images/glass-${glass.id}.jpg`} alt={glass.name} /><h3>{glass.name}</h3>
        </div>
      );
    }
    return null;
  }

  renderStyle = (beer) => {
    const style = beer.style;
      return (
        <div>
          <h3>More on {style.name}</h3>
          <div>{style.description}</div>
        </div>
      );
    }

  render(){

    /*
    We can only return one element, though it can have children.
    Comments count as an element.
    Hence, if you want to return multiple things wrap them in a container.
    */
      return (
      <div>
        <Header siteName="Beer Me! 🍻" />
        <div className="single-beer">
          <h2 className="label">{this.state.beer.name}</h2>
          <div>{this.state.beer.description}</div>
          <br />
          {this.renderLabel(this.state.beer)}
          <br />
          {this.renderGlass(this.state.beer)}
          <h3>ABV: {this.state.beer.abv}</h3>
          {this.renderStyle(this.state.beer)}
        </div>
      </div>
      )
  }



}


export default Single;
