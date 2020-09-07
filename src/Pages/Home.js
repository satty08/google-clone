import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
    return (
        <div>
            <div className='home__header'>
                <div className="home__headerLeft">
                    <Link to="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</Link>
                    <Link to="https://store.google.com/">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link href="https://accounts.google.com/">Gmail</Link>
                    <Link href="https://www.google.co.in/imghp?hl=en&tab=wi&ogbl">Images</Link>
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
            </div>
        </div>
    )
}

export default Home
