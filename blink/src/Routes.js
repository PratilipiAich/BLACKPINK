
import Home from './components/Home'
import Television from './components/Television'
import Tracks from './components/Tracks'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Jisoo from './components/Jisoo';
import Jennie from './components/Jennie';
import Rose from './components/Rose';
import Lisa from './components/Lisa';
import TVPages from './components/TVPages';
import HomeDesktop from './components/HomeDesktop';
import Albums from './components/Albums';
import BPGallery from './components/BPGallery';
import MemberGallery from './components/MemberGallery';
import ReactGallery from './components/ReactGallery';

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
                        <Route path="/albums" component={Albums} />
                        <Route path="/gallery" component={BPGallery} />
                        <Route path="/gallery-jisoo" component={MemberGallery} />
                        <Route path="/gallery-jennie" component={MemberGallery} />
                        <Route path="/gallery-rose" component={MemberGallery} />
                        <Route path="/gallery-lisa" component={ReactGallery} />
                        <Route path="/gallery-react" component={ReactGallery} />
                        <Route path="/:tvpage" component={TVPages} />
                        
                    </Switch>
                </main>
            )
        }

export default Routes
