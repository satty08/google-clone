import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';
import Adsense from 'react-adsense';

function Home() {
    return (
        <div>
            <div className='home__header'>
                <div className="home__headerLeft">
                    <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
                    <a href="https://store.google.com/">Store</a>
                </div>
                <div className="home__headerRight">
                    <a href="https://accounts.google.com/">Gmail</a>
                    <a href="https://www.google.co.in/imghp?hl=en&tab=wi&ogbl">Images</a>
                    <AppsIcon />
                    <Avatar />

                </div>
            </div>

            <div className="home__body">
                <img 
                    src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
                    alt=""
                />
                <div className="home__inputContainer">
                    <Search />
                </div>

                <AdSense.Google
                    client='ca-pub-7292810486004926'
                    slot='7806394673'
                    style={{ width: 500, height: 300, float: 'left' }}
                    format=''
                />
            </div>
        </div>
    )
}

export default Home
