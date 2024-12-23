import classes from "./Footer.module.css";
import FacebookIcon from "../UI/Icons/FacebookIcon";
import InstagramIcon from "../UI/Icons/InstagramIcon";
import PinterestIcon from "../UI/Icons/PinterestIcon";
import TwitterIcon from "../UI/Icons/TwitterIcon";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.upper}>
        <div className={classes.icons}>
          <div className={classes.iconContainer}>
            <FacebookIcon />
          </div>
          <div className={classes.iconContainer}>
            <InstagramIcon />
          </div>
          <div className={classes.iconContainer}>
            <PinterestIcon />
          </div>
          <div className={classes.iconContainer}>
            <TwitterIcon />
          </div>
        </div>
        <div className={classes.links_1}>
          <a href="#">HOME</a>
          <a href="#">MENU</a>
          <a href="#">STORY</a>
          <a href="#">DETOX</a>
          <a href="#">LOCATION</a>
        </div>
        <div className={classes.links_2}>
          <a href="#">CONTACT</a>
          <p>|</p>
          <a href="#">BLOG</a>
          <p>|</p>
          <a href="#">CATERING</a>
          <p>|</p>
          <a href="#">DELIVERY</a>
        </div>
      </div>
      <div className={classes.lower}>
        <h6>
          ЗДОРОВЫЙ &#183; ВКУСНЫЙ &#183; БЫСТРЫЙ &#183; ПОВСЕДНЕВНЫЙ &#183; С ЛЮБОВЬЮ <span className={classes.heart}>&#10084;</span> АРСЕН
        </h6>
      </div>
    </div>
  );
};

export default Footer;
