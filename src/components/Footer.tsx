import { FooterContainer } from "./Style";
import LogoImg from "../images/logo.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <img src={LogoImg} alt="logo-img" />
      <div className="list">
        <div className="product">
          <h3>Product</h3>
          <div className="lists">
            <p>Overwiew</p>
            <p>Pricing</p>
            <p>Marketplace</p>
            <p>Features</p>
            <p>Integrations</p>
          </div>
        </div>
        <div className="company">
          <h3>Company</h3>
          <div className="lists">
            <p>About</p>
            <p>Team</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="connect">
          <h3>Connect</h3>
          <div className="lists">
            <p>Contact</p>
            <p>Newsletter</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
