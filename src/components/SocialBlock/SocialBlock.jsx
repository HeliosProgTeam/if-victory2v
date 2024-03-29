import Divider from "../divider/Divider"
import SocialLinks from "../SocialLinks/SocialLinks"

export default function SocialBlock() {
    return (
        <div className="social-block">
            <h2 className="social-block__title">Наші соціальні мережі</h2>
            <Divider />
            <SocialLinks />
            <div className="social-block__links"></div>
        </div>
    )
}