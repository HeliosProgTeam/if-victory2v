import React from 'react'
import Media from "../../components/media/Media";
import DevelopersMedia from "../../components/developersMedia/DevelopersMedia";

export const Footer = ({...props}) => {
    return <footer className={'footer'} {...props}>
        <Media/>
        <hr style={{
            border:"none",
            color:"#404040",
            backgroundColor:"#404040",
            height:"3px",
            marginBottom:"15px"
        }}
        />
        <DevelopersMedia/>
    </footer>;
};
