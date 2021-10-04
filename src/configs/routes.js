import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import FreeAPI from '../screens/free-api';
import AnimalAPI from '../screens/animal-api-name';
import Snacks from '../screens/snacks';
import SignUp from "../screens/SignUp";
import Login from "../screens/login";
import Trainer from "../screens/trainer-dash";
import Std from "../screens/student-res"
import ShowData from "../screens/showData";


export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/animal-api">
                        <AnimalAPI />
                    </Route>
                    <Route path="/snacks">
                        <Snacks />
                    </Route>
                    <Route exact path="/">
                        <FreeAPI />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/trainer-dash">
                        <Trainer />
                    </Route>
                    <Route path="/student-res">
                        <Std />
                    </Route>
                    <Route path="/show-data">
                        <ShowData />
                    </Route>



                </Switch>
            </div>
        </Router>
    );
}