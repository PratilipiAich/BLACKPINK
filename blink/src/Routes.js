
import Home from './components/Home'
import Television from './components/Television'
import Tracks from './components/Tracks'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Jisoo from './components/Jisoo';
import Jennie from './components/Jennie';
import Rose from './components/Rose';
import Lisa from './components/Lisa';

function Routes() {
    return (
                <main>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/tracks" component={Tracks} />
                        <Route path="/television" component={Television} />
                        <Route path="/jisoo" component={Jisoo} />
                        <Route path="/jennie" component={Jennie} />
                        <Route path="/rose" component={Rose} />
                        <Route path="/lisa" component={Lisa} />
                    </Switch>
                </main>
            )
        }

export default Routes
