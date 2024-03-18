import InstagramLogo from '../../../public/images/instagram.svg';
import FacebookLogo from '../../../public/images/facebook.svg';

export default function SocialLinks() {
    console.log(InstagramLogo);
    return (
        <div className='links-wrapper'>
            <a href="https://www.facebook.com/share/1XGxQAEjNGLi7CFh/?mibextid=dGKdO6">
                <img src={FacebookLogo.src} alt="facebook-logo" />
            </a>
            <a href="https://www.instagram.com/prykarpat_garant_">
                <img src={InstagramLogo.src} alt="instagram-logo" />
            </a>
        </div>
    )
}