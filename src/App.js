import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
 import {styles, themeTab} from './styles/Tab.js';
import FormUser from './components/Test.js';
import ListUser from './components/ListUser';

import {
  AppBar,
  Tabs,
  Tab,
  Typography
}from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import List from '@material-ui/icons/List';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class App extends Component {

  constructor(){
    super();
    this.state = {
      users: [],
      value: 0
    }

    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleAddUser = async (user) => {
    const data = {
      "username": user.username,
      "password": user.password,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "role": user.role,
      "birthdate": user.birthdate,
      "Email": {
        "email":user.email,
      },
      "Address": {
        "addressLine1": user.addressLine1,
        "addressLine2": user.addressLine2,
        "reference": user.reference,
        "neighborhood": user.neighborhood,
        "state": user.estado,
        "city": user.city,
        "zipCode": user.zipCode,
      },
      "Phone": {
        "countryCode": user.countryCode,
        "phone":user.phone
      }
    };


    const url = 'http://localhost:3000/users';

    const settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    };

    const request = new Request(url, settings);

    await fetch(request)
    .then(response => response.json())
    .then(data => this.setState({ users: [...this.state.users, data] }))
    .catch(error => console.log(error))

  };

  componentDidMount = async () => {
    const url = 'http://localhost:3000/users';

    const settings = {
      method: 'GET'
    };

    const request = new Request(url, settings);

    await fetch(request)
    .then(response => response.json())
    .then(data => this.setState({users: data}))
    .catch(error => console.log(error))

  }

  render() {

    const users = this.state.users;
    const { classes } = this.props;
    const { value } = this.state;

    console.log(users);

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={themeTab}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Registro de Usuario" icon={<PersonPinIcon />}/>
              <Tab label="Lista de usuarios" icon={<List/>}/>
            </Tabs>
          </AppBar>
        </MuiThemeProvider>
        {value === 0 && <TabContainer><FormUser onAddUser={this.handleAddUser}/></TabContainer>}
        {value === 1 && <TabContainer><ListUser users={ users }/></TabContainer>}
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default  withStyles(styles)(App);
