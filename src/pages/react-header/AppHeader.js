import React from "react";
//import Logo from "./src/images/Library.png";
import './AppHeader.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class AppHead extends React.Component{
    headTitle = "Library"
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      var Logo = require('../../../src/images/Library2.png');
      return (
       <header>
         <img src={Logo} alt="logo" className="logo"></img>
         <nav>
           <ul className="nav_links">
             <li>nav 1</li>
             <li>nav 2</li>
             <li>nav 3</li>
           </ul>
         </nav>
         <a href="#"><button>Contact</button></a>
       </header>
      );
    }
        //console.log("test");
        // return(
        //   <div className="app-head">
        //       <header class>
        //         <Navbar color="dark" expand="md" dark>
        //             <Nav><h1 className="appTitle">Library</h1></Nav>
        //         </Navbar>
                 
        //       </header>
        //   </div>
        // );
    
}
export default AppHead;

// function head() {
//   return (
//     <div className="App-header">
//       <header className="App-header">
//         <Navbar bg="dark" variant="dark">
//             <Nav className="mr-auto">
//                 <Nav.Link onClick={this.handleRoute("/")}>Home</Nav.Link>
//                 <Nav.Link onClick={this.handleRoute("/about")}>About</Nav.Link>
//             </Nav>
//             <Form inline>
//                 <FormControl
//                     onChange={this.handleSearchInput}
//                     value={this.state.searchText}
//                     type="text"
//                     placeholder="Search"
//                     className="mr-sm-2"
//                 />
//                 <Button onClick={this.handleSearchSubmit} variant="outline-info">
//                     Search
//                 </Button>
//             </Form>
//         </Navbar>
//       </header>
//     </div>
//   );
// }

// export default head;
 //class HeadComp extends React.Component {
//     state = {
//         searchText: ""
//     };
//     handleRoute = route => () => {
//         this.props.history.push({ pathname: route });
//     };

//     handleSearchInput = event => {
//         this.setState({
//             searchText: event.target.value
//         });
//     };

//     handleSearchSubmit = () => {
//         if (this.state.searchText) {
//             this.props.history.push({
//                 pathname: "/results",
//                 state: {
//                     searchText: this.state.searchText
//                 }
//             });
//         } else {
//             alert("Please enter some search text!");
//         }
//     };

//     header() {
//         return (
//             <div className="header">
//                 <header className="App-header">
//                     <Navbar bg="dark" variant="dark">
//                         <Nav className="mr-auto">
//                             <Nav.Link onClick={this.handleRoute("/")}>Home</Nav.Link>
//                             <Nav.Link onClick={this.handleRoute("/about")}>About</Nav.Link>
//                         </Nav>
//                         <Form inline>
//                             <FormControl
//                                 onChange={this.handleSearchInput}
//                                 value={this.state.searchText}
//                                 type="text"
//                                 placeholder="Search"
//                                 className="mr-sm-2"
//                             />
//                             <Button onClick={this.handleSearchSubmit} variant="outline-info">
//                                 Search
//                             </Button>
//                         </Form>
//                     </Navbar>
//                     {/* <Switch>
                        
                        
                        
//                     </Switch> */}
//                 </header>
//             </div>
//         );
//     }
// }

// export default header;
