import React from 'react';
import './SearchPage.css';
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import Response from './Response';
import { Link } from '@material-ui/core';
import Search from './Pages/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    //Live API Call
    const { data } = useGoogleSearch(term);

    // const data = Response;

    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/" >
                    <img
                        className="searchPage__logo"
                        src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" 
                        alt=""
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                
                <div className="searchPage__options">
                    <div className="searchPage__optionsLeft">
                        <div className="searchPage__option">
                            <SearchIcon />
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchPage__option">
                            <DescriptionIcon />
                            <Link to="/news">News</Link>
                        </div>
                        <div className="searchPage__option">
                            <ImageIcon />
                            <Link to="/images">Images</Link>
                        </div>
                        <div className="searchPage__option">
                            <LocalOfferIcon />
                            <Link to="/shopping">Shopping</Link>
                        </div>
                        <div className="searchPage__option">
                            <RoomIcon />
                            <Link to="/maps">Maps</Link>
                        </div>
                        <div className="searchPage__option">
                            <MoreVertIcon />
                            <Link to="/more">More</Link>
                        </div>
                    </div>
                    <div className="searchPage__optionsRight">
                        <div className="searchPage__option">
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
