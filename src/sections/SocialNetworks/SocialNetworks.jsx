import Divider from "../../components/divider/Divider";
import InstagramLogo from "../../../public/images/instagram-color.svg";
import FacebookLogo from "../../../public/images/facebook-color.svg";

export default function SocialBlock() {
  return (
    <div className="social-block">
      <h2 className="social-block__title">Наші соціальні мережі</h2>
      <Divider />
      <div className="social-block__links">
        <a
          href="https://www.facebook.com/share/1XGxQAEjNGLi7CFh/?mibextid=dGKdO6"
          className="social-link_large"
        >
          <img
            src={FacebookLogo.src}
            alt="facebook-logo"
            className="social-link__img"
          />
        </a>
        <a
          href="https://www.instagram.com/prykarpat_garant_"
          className="social-link_large"
        >
          <img
            src={InstagramLogo.src}
            alt="instagram-logo"
            className="social-link__img"
          />
        </a>
      </div>
    </div>
  );
}
