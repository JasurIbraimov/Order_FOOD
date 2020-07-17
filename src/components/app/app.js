import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import ItemPage from '../pages/itemPage';
import {Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`, minHeight:'100vh'}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Route path="/cart">
                    <CartPage/>
                </Route>
                <Route path = '/:id' component={ItemPage}/>
            </Switch>
        </div>
    )
}

export default App;