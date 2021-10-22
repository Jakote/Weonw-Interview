import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'whatwg-fetch';
import Home from './Home';
import Footer from './Footer' 

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

class App extends React.Component {

  render(){
    return (
      <div className="App">
      

        <AppBar position="static" >
            <Toolbar >
                <Typography variant="subtitle1" color="inherit" style={{flex:1}} align="center">
                  WEOWNOMY Interview
                </Typography>
            </Toolbar>
        </AppBar>

        <Home />
        <Footer />
      </div>
    );
  }
  
}

export default App;
