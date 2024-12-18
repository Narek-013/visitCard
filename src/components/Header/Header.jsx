import myPhoto from "../../Images/myPhoto.jpg"
import "./header.scss"

const Header = () => {
    return (
      <div className="header">
        <div className="header__container container">
          <img src={myPhoto} alt="my imagee" />
        </div>
      </div>
    );
}

export default Header;
