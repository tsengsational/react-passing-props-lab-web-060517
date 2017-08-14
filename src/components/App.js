import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  } // end constructor

  componentWillMount() {
    this.fetchItems()
    this.fetchFilters()
  }

  fetchItems = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    return(
    <FruitBasket handleFilterChange={this.handleFilterChange} filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter} />
  )
  }

} // end class


export default App;
