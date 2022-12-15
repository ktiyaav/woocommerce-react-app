import React,{Component} from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configStore';
import Main from './components/Main';
import { Auth0Provider } from "@auth0/auth0-react";
 
const store = configureStore();
class App extends Component{
    render(){
        
        return(
            <Auth0Provider
                domain="dev-8-gnn5k0.auth0.com"
                clientId="LHJoMpdXJuaSq7I5EP74R3zvwk8Qx0kV"
                redirectUri={window.location.origin}
            >
                <Provider store= {store}>
                <div>
                    <Main/>
                </div>
                </Provider>
            </Auth0Provider>
        )
    }
}
export default App;