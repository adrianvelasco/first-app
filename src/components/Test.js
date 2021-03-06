import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, CssBaseline, Paper, Typography, Grid, TextField, Button,
  InputAdornment, IconButton
} from '@material-ui/core';
import {  withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { AccountCircle, VisibilityOff, Visibility} from '@material-ui/icons';
import { styles, Guardar } from '../styles/Register';

class FormUser extends Component{
    constructor(){
        super();
        this.state = {
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          role: '',
          birthdate: '',
          email: '',
          addressLine1: '',
          addressLine2: '',
          reference: '',
          neighborhood: '',
          estado: '',
          city: '',
          zipCode: '',
          countryCode: '',
          phone: '',
          showPassword: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddUser(this.state);
        this.setState({
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          role: '',
          birthdate: '',
          email: '' ,
          addressLine1: '',
          addressLine2: '',
          reference: '',
          neighborhood: '',
          estado: '',
          city: '',
          zipCode: '',
          countryCode: '',
          phone: ''
        });
    }

    handleInputChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

  render(){
    const {classes} = this.props;
    let content = (
      <div>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle/>
          </Avatar>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h6" gutterBottom>
                     Datos del Usuario
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                     fullWidth
                     id="firstName"
                     name="firstName"
                     type="text"
                     label="Nombre"
                     margin="normal"
                     variant="outlined"
                     value={this.state.firstName}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    fullWidth
                     id="lastName"
                     name="lastName"
                     type="text"
                     label="Apellidos"
                     margin="normal"
                     variant="outlined"
                     value={this.state.lastName}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    fullWidth
                     id="role"
                     name="role"
                     type="number"
                     label="Rol"
                     margin="normal"
                     variant="outlined"
                     value={this.state.role}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="birthdate"
                      type="date"
                      name="birthdate"
                      margin="normal"
                      variant="outlined"
                      placeholder="Cumpleaños"
                      value={this.state.birthdate}
                      onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    fullWidth
                     id="email"
                     name="email"
                     type="text"
                     label="Correo electronico"
                     margin="normal"
                     variant="outlined"
                     value={this.state.email}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                     fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment variant="filled" position="end">
                            +
                          </InputAdornment>
                        ),
                     }}
                     id="countryCode"
                     name="countryCode"
                     type="text"
                     label="código de país"
                     margin="normal"
                     variant="outlined"
                     value={this.state.countryCode}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                     fullWidth
                     id="phone"
                     name="phone"
                     type="text"
                     label="Telefono"
                     margin="normal"
                     variant="outlined"
                     value={this.state.phone}
                     onChange={this.handleInputChange}
                     />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                      name="username"
                      required
                      id="username"
                      label="Usuario"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                      name="password"
                      required
                      id="filled-adornment-password"
                      label="Contraseña"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      type={this.state.showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment:(
                        <InputAdornment variant="filled" position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                        ),
                      }}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h6" gutterBottom>
                    Datos del Domicilio
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="addressLine1"
                      name="addressLine1"
                      type="text"
                      label="Dirección 1"
                      margin="normal"
                      variant="outlined"
                      value={this.state.addressLine1}
                      onChange={this.handleInputChange}
                     />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="addressLine2"
                      name="addressLine2"
                      type="text"
                      label="Dirección 2"
                      margin="normal"
                      variant="outlined"
                      value={this.state.addressLine2}
                      onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                     fullWidth
                     id="reference"
                     name="reference"
                     type="text"
                     label="Referencias"
                     margin="normal"
                     variant="outlined"
                     value={this.state.reference}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                     fullWidth
                     id="neighborhood"
                     name="neighborhood"
                     type="text"
                     label="Colonia"
                     margin="normal"
                     variant="outlined"
                     value={this.state.neighborhood}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                     fullWidth
                     id="estado"
                     name="estado"
                     type="text"
                     label="Estado"
                     margin="normal"
                     variant="outlined"
                     value={this.state.estado}
                     onChange={this.handleInputChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                     fullWidth
                     id="city"
                     name="city"
                     type="text"
                     label="Ciudad"
                     margin="normal"
                     variant="outlined"
                     value={this.state.city}
                     onChange={this.handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                     id="zipCode"
                     name="zipCode"
                     type="text"
                     label="Codigo postal"
                     value={this.state.zipCode}
                     onChange={this.handleInputChange}
                     margin="normal"
                     variant="outlined"
                    />
                </Grid>
                <MuiThemeProvider theme={Guardar}>
                    <Button type="submit" fullWidth variant="contained" color="primary" size="medium" className={classes.submit}>
                        Guardar
                    </Button>
                </MuiThemeProvider>
            </Grid>
          </form>
        </Paper>
      </div>
    );
    return content;
  }
}


 FormUser.propTypes = {
   classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(FormUser);
