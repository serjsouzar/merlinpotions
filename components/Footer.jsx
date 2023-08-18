import { ebgar } from "@/app/fonts";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_info">
        <div className="links_container">
          <ul>
            <li>COMPANY</li>
            <li>CONTACT US</li>
            <li>SHIPPING</li>
            <li>RETURNS</li>
            <li>CAREERS</li>
          </ul>
          <div className="social_media_container">
            <Image
              width={30}
              height={30}
              src="/assets/facebook.png"
              alt="facebook_icon"
            />
            <Image
              width={30}
              height={30}
              src="/assets/twitterx.png"
              alt="twitterx_icon"
            />
            <Image
              width={30}
              height={30}
              src="/assets/instagram.png"
              alt="instagram_icon"
            />
            <Image
              width={25}
              height={25}
              src="/assets/google-plus.png"
              alt="google-plus_icon"
            />
            <Image
              width={30}
              height={30}
              src="/assets/whatsapp.png"
              alt="whatsapp_icon"
            />
          </div>
          <p>Ⓒ 2023 Merlin's Potions. All Rights Reserved</p>
        </div>
        <div className="newsletter_container">
          <div className="newsletter">
            <p className={ebgar.className} style={{ color: "#000", fontSize: "20px"}}>Sign up for our Newsletter</p>
            <label>Sign up for our newsletter  & get exclusive discounts!</label>
            <div className="input_container">
              <input type="text" placeholder="Enter your email"/>
              <button className="footer_btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
