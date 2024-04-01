import InstagramLogo from '../../../public/images/instagram.svg';
import FacebookLogo from '../../../public/images/facebook.svg';

export default function SocialLinks() {
    return (
        <div className='links-wrapper'>
            <a href="https://www.facebook.com/share/1XGxQAEjNGLi7CFh/?mibextid=dGKdO6" className="social-link">
                <img src={FacebookLogo.src} alt="facebook-logo" className="social-link__img" />
            </a>
            <a href="https://www.instagram.com/prykarpat_garant_" className="social-link">
                <img src={InstagramLogo.src} alt="instagram-logo" className="social-link__img" />
            </a>
        </div>
    )
}
