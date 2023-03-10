import React,{useState} from "react";
import { FaYoutube, FaGithub, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const sites = [
    {
        id: 1,
        name: 'Youtube',
        url: 'https://www.youtube.com/',
        icon: <FaYoutube className="text-light" size='2.5em'/>
    },{
        id: 2,
        name: 'Github',
        url: 'https://github.com/',
        icon: <FaGithub className="text-light" size='2.5em'/>
    },{
        id: 3,
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: <FaFacebook className="text-light" size='2.5em'/>
    },{
        id: 4,
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: <FaInstagram className="text-light" size='2.5em'/>
    },{
        id: 5,
        name: 'Pinterest',
        url: 'https://www.pinterest.com/',
        icon: <FaPinterest className="text-light" size='2.5em'/>
    }
];

// make hover effect style



const TopSites = () => {
    const style = {
        width: '7rem',
        height: '7rem',
        cursor: 'pointer',
    }

    const handleSite = (url) => {
        window.location.href = url;
    }

    return (
        <>
            <div className="d-flex flex-wrap flex-row justify-content-center">
                {sites.map((site) => (
                    <div key={site.id} className="card mx-2 my-4 rounded-0 bg-dark bg-opacity-75 border-light px-3 pb-2"
                    style={style} onClick={handleSite.bind(this,site.url)} >
                        <div className="card-body">
                            {site.icon}
                        </div>
                        {site.name}
                    </div>
                ))}
            </div>
        </>
    );
}

export default TopSites;