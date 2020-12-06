import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Students from './pages/Students'
import Helpers from './pages/Helpers'
import VideoHome from './pages/Video'
import VideoCrud from './pages/Video/video-crud'
import CreateVideo from './pages/Video/create-video'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Login } />
                <Route path="/Home" exact component={ Home } />
                <Route path="/Students" exact component={ Students } />
                <Route path="/Helpers" exact component={ Helpers } />
                <Route path="/Video" exact component={ VideoHome } />
                <Route path="/Video/dashboard" exact component={ VideoCrud } />
                <Route path="/Video/create" exact component={ CreateVideo } />
            </Switch>
        </BrowserRouter>
    );
}   

export default Routes