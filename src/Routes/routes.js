import React, {Component} from 'react';

//Dependencia de enrutamiento statico (React-router-dom)
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Rutas
import Navegation from '../App.js';
import Test from '../components/Test.js';


class Routerstatic extends Component{

    render(){
        let content = (
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Navegation} />
              <Route path='/' component={Test} />
            </Switch>
        </BrowserRouter>
        );
        return content;
    }
}

export default Routerstatic;
