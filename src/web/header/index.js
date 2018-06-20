import React, {
    Component,
  } from 'react';
  import {
    connect,
  } from 'react-redux';
  //import { Link } from 'react-router-dom'

  class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggle : true
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({toggle : !this.state.toggle})
    }
    render(){
        const Item = (props) => ( 
        <a className="itemNav"><span className="icon">icon</span><span className={this.state.toggle === false ? 'itemName hide' : 'itemName'}>{props.Name}</span></a>
    );
        return (<div > <nav className={this.state.toggle === false ? "myNav animateClose" : "myNav animateOpen"} id="myNav">
       <Item Name={"item n°1"}/>
       <Item Name={"item n°2"}/>
       <Item Name={"item n°3"}/>
       <Item Name={"item n°4"}/>
            </nav>     <button  onClick={this.toggle} className="button"> open/close</button></div>)
    }
  }


  export default connect()(Header);