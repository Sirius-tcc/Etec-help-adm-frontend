import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Login from '../pages/Login'
import Home from '../pages/Home'
import Students from '../pages/Students'
import Helpers from '../pages/Helpers'
import VideoHome from '../pages/Video'
import VideoCrud from '../pages/Video/video-crud'
import CreateVideo from '../pages/Video/create-video'


import PrivateRoute from './PrivateRoute'
import HomeRoute from './HomeRoute'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <HomeRoute path="/" exact component={ Login } />
                <Route path="/login" exact component={ Login } />
                <PrivateRoute path="/Home" exact component={ Home } />
                <PrivateRoute path="/Students" exact component={ Students } />
                <PrivateRoute path="/Helpers" exact component={ Helpers } />
                <PrivateRoute path="/Video" exact component={ VideoHome } />
                <PrivateRoute path="/Video/dashboard" exact component={ VideoCrud } />
                <PrivateRoute path="/Video/create" exact component={ CreateVideo } />
            </Switch>
        </BrowserRouter>
    );
}   

export default Routes