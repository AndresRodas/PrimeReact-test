import React, { Component } from 'react';
import './App.css';

//PRIME
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { Button } from 'primereact/button'
import { TabMenu } from 'primereact/tabmenu';
import { render } from '@testing-library/react';


export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        }
        this.items =  [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
    }

    render() {
      if(this.state.activeIndex == 1){
        return (
          <div>
            <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
            <Calendar value="Estamos en el Calendario"/>
          </div>
        )
      }
      if(this.state.activeIndex == 2){
        return (
          <div>
            <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
            <Edit value="Estamos en el Edit"/>
          </div>
        )
      }
      return (
        <div>
          <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
          <Home value="Estamos en el Home"/>
        </div>
      )
    }
}

class Home extends React.Component {
  render() {
    return (
      <form>
        <h1>HOME</h1>
        <h2>valor: {this.props.value}</h2>
      </form>
    )
  }
}
class Calendar extends React.Component {
  render() {
    return (
      <form>
        <h1>CALENDAR</h1>
        <h2>valor: {this.props.value}</h2>
      </form>
    )
  }
}
class Edit extends React.Component {
  render() {
    return (
      <form>
        <h1>EDIT</h1>
        <h2>valor: {this.props.value}</h2>
      </form>
    )
  }
}







class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    )
  }
}



export default App;
