import { HeaderContainer, HeaderTexts, Navigation } from "./Style";
import LogoImg from "../images/logo.svg";
import MenuIcon from "../images/icon-hamburger.svg";
import ArrowIcon from "../images/icon-arrow-light.svg";
import ArrowIconDark from "../images/icon-arrow-dark.svg";
import CloseIcon from "../images/icon-close.svg";
import { useState } from "react";

export default function Header() {
  const [MenuShow, SetMenuShow] = useState<boolean>(false);
  const [showProductMenu, setShowProductMenu] = useState<boolean>(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState<boolean>(false);
  const [showConnectMenu, setShowConnectMenu] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <Navigation>
        {MenuShow === true ? (
          <div className="menu_container">
            <div className="scrolls">
              <div className="post_menu">
                <div
                  className="product"
                  onClick={() => setShowProductMenu(!showProductMenu)}
                >
                  <p>Product</p>
                  <img
                    src={ArrowIconDark}
                    alt=""
                    style={{
                      transform: showProductMenu
                        ? "rotate(180deg)"
                        : "rotate(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                {showProductMenu && (
                  <div className="post_menu_post">
                    <p>Product1</p>
                    <p>Product2</p>
                    <p>Product3</p>
                  </div>
                )}
              </div>

              <div className="post_menu">
                <div
                  className="company"
                  onClick={() => setShowCompanyMenu(!showCompanyMenu)}
                >
                  <p>Company</p>
                  <img
                    src={ArrowIconDark}
                    alt=""
                    style={{
                      transform: showCompanyMenu
                        ? "rotate(180deg)"
                        : "rotate(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                {showCompanyMenu && (
                  <div className="post_menu_post">
                    <p>Company1</p>
                    <p>Company2</p>
                    <p>Company3</p>
                  </div>
                )}
              </div>

              <div className="post_menu">
                <div
                  className="connect"
                  onClick={() => setShowConnectMenu(!showConnectMenu)}
                >
                  <p>Connect</p>
                  <img
                    src={ArrowIconDark}
                    alt=""
                    style={{
                      transform: showConnectMenu
                        ? "rotate(180deg)"
                        : "rotate(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                {showConnectMenu && (
                  <div className="post_menu_post">
                    <p>Contact</p>
                    <p>Newsletter</p>
                    <p>LinkedIn</p>
                  </div>
                )}
              </div>
            </div>

            <div className="buttons_container_2">
              <button className="button1">Login</button>
              <button className="button2">Sign Up</button>
            </div>
          </div>
        ) : (
          ""
        )}
        <img src={LogoImg} alt="logo-img" />
        {MenuShow === false ? (
          <img
            className="menu_img"
            onClick={() => SetMenuShow(true)}
            src={MenuIcon}
            alt="menu-icon"
          />
        ) : (
          <img onClick={() => SetMenuShow(false)} src={CloseIcon} />
        )}

        <nav className="navigation">
          <div
            onClick={() => setShowProductMenu(!showProductMenu)}
            className="nav"
          >
            <p>Product</p>
            <img src={ArrowIcon} alt="" />
          </div>
          {showProductMenu && (
            <div className="desktop_menu">
              <p>product1</p>
              <p>profuct2</p>
              <p>product3</p>
            </div>
          )}
          <div
            onClick={() => setShowCompanyMenu(!showCompanyMenu)}
            className="nav"
          >
            <p>Company</p>
            <img src={ArrowIcon} alt="" />
          </div>
          {showCompanyMenu && (
            <div className="desktop_menu2">
              <p>company1</p>
              <p>company2</p>
              <p>company3</p>
            </div>
          )}
          <div
            onClick={() => setShowConnectMenu(!showConnectMenu)}
            className="nav"
          >
            <p>Connect</p>
            <img src={ArrowIcon} alt="" />
          </div>
          {showConnectMenu && (
            <div className="desktop_menu3">
              <p>connect1</p>
              <p>connect2</p>
              <p>connect3</p>
            </div>
          )}
        </nav>
        <div className="buttons_div">
          <button className="trasparent">Login</button>
          <button className="whitte">Sign Up</button>
        </div>
      </Navigation>
      <HeaderTexts>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="buttons_container">
          <button className="white">Start for Free</button>
          <button className="red">Learn More</button>
        </div>
      </HeaderTexts>
    </HeaderContainer>
  );
}
