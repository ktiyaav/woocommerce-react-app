import React,{Component, useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configStore';
import Main from './components/Main';
const store = configureStore();

class App extends Component{
    render(){
        return(
            <Provider store= {store}>
            <>
            <div>
                <Main/>
            </div>
            </>
            </Provider>
        )
    }
}
export default App;