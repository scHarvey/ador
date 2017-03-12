import React from 'react'
import Header from './Header'
import Loader from './Loader'
import Beer from './Beer'
import Results from './Results'
import Search from './Search'
import Single from './Single'

class Main extends React.Component{
  constructor() {
      super(); //constructs the react component before we actually extend it
      this.state = {
        numBeers : 10,
        beers: [],
        loading: true
      }
  }

  componentWillMount() {
    this.loadBeers();
  }

  incrementBeers = () => { //our "method" is now actually implemented as a propoerty which is an anonymous function so that it's now bound to the instance and as access to "this"
    const beerAmount = this.state.numBeers + 1;
    //setState only needs to be sent the items within the state that you want to modify, it's more like "updateState"
    this.setState ({
      numBeers: beerAmount
    });
  }

  loadBeers = (searchTerm = 'IPA') => {
    //set loading state to trigger loading animation
    this.setState({loading: true});

    // Check for beers in local storage
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers && false) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({ beers: localBeers, loading: false });
      return; // stop before fetch happens!
    }

    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then((beers) => {
        console.log(beers);
        // filter for beers with images
        const filteredBeers = beers.data.filter(beer => !!beer.labels);
        this.setState({ beers: filteredBeers, loading: false });
        // save to local storage in case we search for this again
        localStorage.setItem(`search-${searchTerm}`, JSON.stringify(this.state.beers));
      })
      .catch(err => console.error(err));
  }




  render() {
    if( this.state.loading ) {
      return <Loader message="🍻 Pouring Samples... 🍻" />
    }

    return (
      <div className="wrapper">
        <Header siteName="Beer Me! 🍻" />
        <Search searchTerm="" />
        {/*onClick sets a function as the handler/listener*/}
        <button onClick={this.incrementBeers}>{this.state.numBeers} 🍺</button>
        <br />
        <button onClick={this.incrementBeers}>{'🍻 '.repeat(this.state.numBeers)} 🍺</button>
        <Results beers={this.state.beers} />
{
  /*
        <Loader message="Pouring Samples..." />
        <Beer />
        <Results />

        <Single />
  */
}
      </div>
    )
  }




}
/*
allows a user of component to name it whatever they want when they import it
*/
export default Main;
