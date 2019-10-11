import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import SearchForm from "./components/layout/SearchForm";
import jumbo from "./components/layout/jumbo";

function App() {
  // state = {
  //   bookTitle: ""
  // };
  // handelChange = event => {
  //   const { name } =event.target;
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };

  return (
    <div className="App">
      <Navbar/>
      <jumbo/>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-1">
          <SearchForm/>
          {/* handelChange={this.handelChange} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
