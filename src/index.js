import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'
import Messages from './Messages'
import Navbar from './Navbar'
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

/* add the navbar component */
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       /* add styling to Navlink */
//       style={link}
//       /* add prop for activeStyle */
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink>
//     <NavLink
//       to="/signup"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >SignUp</NavLink>
//       <NavLink
//       to="/messages"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Messages</NavLink>
//   </div>;

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };
// for phase 2 we add our about and login componenets and add their /about ande /login routes to the router
// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };

// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// const SignUp = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="email-address" placeholder="Email Address" />
//           <label htmlFor="email-address">Enter Valid Email Address</label>
//         </div>
//         <div>
//           <input type="text" name="create-username" placeholder="Create Username" />
//           <label htmlFor="create-username">Create Username</label>
//         </div>
//         <div>
//           <input type="password" name="create-password" placeholder="Create Password" />
//           <label htmlFor="create-password">Create Password</label>
//         </div>
//         <input type="submit" value="SignUp" />
//       </form>
//     </div>
//   )
// }

// const Messages = () => {
//   return (
//     <div>
//       <h1>You have no new messages!</h1>
//     </div>
//   )
// }

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  // <Home />,
  // document.getElementById('root')
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);
