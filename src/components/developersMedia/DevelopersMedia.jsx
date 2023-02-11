import React from 'react';
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import Telegram from './telegram.svg'
import Github from './github.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Img from '../../components/Image'

const DevelopersMedia = () => {
    return (
        <div className={"developers"}>
            <span className={"developers__rights"}>
                © {(new Date().getFullYear())} Helios, Inc. All Rights reserved
            </span>
            <div className="developers__media">
                <div className="developers__item">
                    <a href="#" className={'developers__icon '} aria-label={"Інстаграм розробника"}>
                        {/*<Img src={Instagram} alt={"media"}/>*/}
                      <InstagramIcon style={{fontSize:"inherit"}}/>
                    </a>
                </div>
                <div className="developers__item">
                    <a href="#" className={'developers__icon '} aria-label={"Твіттер розробника"}>
                        {/*<Img src={Twitter} alt={"media"}/>*/}
                      <TwitterIcon style={{fontSize:"inherit"}}/>
                    </a>
                </div>
                <div className="developers__item">
                    <a href="#" className={'developers__icon developers__icon--telegram'} aria-label={"Телеграм розробника"}>
                        {/*<Img src={Telegram} alt={"media"}/>*/}
                      <TelegramIcon style={{fontSize:"inherit"}}/>
                    </a>
                </div>
                <div className="developers__item">
                    <a href="#" className={'developers__icon '} aria-label={"Гітхаб розробника"}>
                        {/*<Img src={Github} alt={"media"}/>*/}
                      <GitHubIcon style={{fontSize:"inherit"}}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DevelopersMedia;