import React from 'react'
import Media from "../../components/media/Media";
import DevelopersMedia from "../../components/developersMedia/DevelopersMedia";
import Links from "../../components/links/Links";

export const Footer = ({...props}) => {
    return <footer className={'footer'} {...props}>
        <Links/>
        <hr style={{
            border:"none",
            color:"#404040",
            backgroundColor:"#404040",
            height:"3px",
            margin:"90px 0 15px"
        }}
        />
        <DevelopersMedia/>
    </footer>;
};
