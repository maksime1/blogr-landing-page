import styled from "styled-components";
export const HeaderContainer = styled.div`
  & {
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(157deg, #ff8f71 10%, #ff3e55 104%);
    padding: 56px 24px 156px;
    border-bottom-left-radius: 100px;
    @media (min-width: 1440px) {
      padding: 59px 161px 150px 130.3px;
    }
  }
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 115px;
  position: relative;
  .navigation {
    display: none;
    @media (min-width: 1440px) {
      display: block;
      display: flex;
      align-items: center;
      gap: 48px;
      padding-right: 390px;
    }
  }
  .desktop_menu {
    @media (min-width: 1440px) {
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.24);
      background-color: grey;
      border: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      top: 60px;
      right: 900px;
    }
  }
  .desktop_menu2 {
    @media (min-width: 1440px) {
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.24);
      background-color: grey;
      border: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      top: 60px;
      right: 760px;
    }
  }
  .desktop_menu3 {
    @media (min-width: 1440px) {
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.24);
      background-color: grey;
      border: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      top: 60px;
      right: 640px;
    }
  }
  .desktop_menu p {
    @media (min-width: 1440px) {
      color: #2d2e40;
      cursor: pointer;
    }
  }
  .navigation p {
    @media (min-width: 1440px) {
      color: #fff;
      font-size: 16px;
      font-family: "Ubuntu", sans-serif;
    }
  }
  .nav {
    @media (min-width: 1440px) {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  .buttons_div {
    display: none;
    @media (min-width: 1440px) {
      display: block;
      display: flex;
      gap: 32px;
      font-family: "Ubuntu", sans-serif;
    }
  }
  .trasparent {
    @media (min-width: 1440px) {
      all: unset;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .whitte {
    padding: 15px 39px 15px 40px;
    border-radius: 28px;
    border: none;
    background-color: #fff;
    color: #ff505c;
    font-size: 16px;
    font-weight: bold;
  }
  .post_menu {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
  .menu_img {
    @media (min-width: 1440px) {
      display: none;
    }
  }
  .product {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .company {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .connect {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .scrolls {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-bottom: 1px solid grey;
    padding-bottom: 24px;
  }
  .buttons_container_2 {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .button1 {
    all: unset;
    color: #1f3e5a;
    font-size: 18px;
    line-height: 1.56;
    font-family: "Overpass", sans-serif;
    font-weight: bold;
    cursor: pointer;
    margin-left: 40px;
  }
  .button2 {
    background-image: linear-gradient(109deg, #ff8f71 -39%, #ff3e55 61%);
    border-radius: 28px;
    border: none;
    padding: 15px 39px 15px 40px;
    color: #fff;
    font-size: 16px;
    font-family: "Ubuntu", sans-serif;
    cursor: pointer;
  }
  .post_menu_post {
    background-color: gray;
    padding: 17px 98px 25px 99px;
    border-radius: 5px;
    border: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .menu_container {
    padding: 24px 24px 32px;
    border-radius: 5px;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.24);
    background-color: #fff;
    position: absolute;
    width: 325px;

    top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h1 {
    font-size: 36px;
    letter-spacing: -1.08px;
    color: #fff;
    text-align: center;
    @media (min-width: 1440px) {
      font-size: 64px;
      letter-spacing: -1.92px;
    }
  }
  & > p {
    font-size: 18px;
    text-align: center;
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    @media (min-width: 1440px) {
      font-size: 20px;
    }
  }
  .buttons_container {
    margin-top: 48px;
    display: flex;
    gap: 16px;
  }
  .white {
    background-color: #fff;
    padding: 15px 16px 15px 17px;
    color: #ff505c;
    border-radius: 28px;
    border: none;
    font-size: 16px;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    .white:hover {
      background-color: green;
    }
  }
  .red {
    background-color: transparent;
    border: solid 1px #fff;
    padding: 15px 24px 15px 25px;
    border-radius: 28px;
    color: #fff;
    font-weight: bold;
    font-family: "Ubuntu", sans-serif;
    cursor: pointer;
  }
`;
export const MainCntainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  & > h1 {
    color: #1f3e5a;
    font-size: 28px;
    letter-spacing: -0.48px;
    font-family: "Overpass", sans-serif;
    font-weight: bold;
    @media (min-width: 1440px) {
      margin-top: 105px;
      font-size: 40px;
    }
  }
  .camera_div {
    display: flex;
    flex-direction: column;
    padding: 38px 24px 200px;
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0;
      gap: 50px;
    }
  }
  .camera_div img {
    margin-bottom: 46px;
    width: 100%;
    @media (min-width: 1440px) {
      width: 610px;
      height: 882px;
    }
  }
  .camera_div h1 {
    text-align: center;
    color: #1f3e5a;
    font-family: "Overpass", sans-serif;
    line-height: 1.14;
    margin-bottom: 16px;
  }
  .camera_div p {
    color: #4c5862;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.5px;
    text-align: center;
    margin-bottom: 40px;
  }
  .mobile_div {
    background-image: linear-gradient(149deg, #2d2e40 24%, #3f4164 124%);
    width: 100%;
    height: 625px;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    position: relative;
    margin-bottom: 80px;
    @media (min-width: 1440px) {
      margin-top: 100px;
      height: 400px;
    }
  }
  .mobile_div img {
    width: 328px;
    height: 347px;
    position: absolute;
    top: -170px;
    @media (min-width: 1440px) {
      width: 472px;
      height: 499px;
      top: -20px;
      left: 100px;
    }
  }
  .texts_div {
    padding: 200px 24px 100px;
    text-align: center;
    color: #fff;
    @media (min-width: 1440px) {
      width: 540px;
      margin-left: 700px;
      padding: 60px;
    }
  }
  .texts_div h1 {
    font-size: 40px;
    letter-spacing: -1.2px;
    margin-bottom: 10px;
  }
  .texts_div p {
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0cap.5px;
  }
  .pc_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: row;
      gap: 100px;
    }
  }
  .pc_div img {
    width: 368px;
    height: 326px;
    @media (min-width: 1440px) {
      width: 700px;
      height: 700px;
    }
  }
  .text_div {
    padding: 46px 24px 100px;
  }
  .pc_div h1 {
    color: #1f3e5a;
    font-size: 28px;
    text-align: center;
    margin-bottom: 16px;
    line-height: 1.14;
  }
  .pc_div p {
    color: #4c5862;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.5px;
    text-align: center;
  }
  #powerful {
    margin-top: 40px;
  }
`;

export const FooterContainer = styled.footer`
  padding: 75px 23px 75px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #24242c;
  border-top-right-radius: 100px;
  color: #fff;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    padding: 10px 360px 70px 165px ;
    gap: 200px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 75px;
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: row;
      gap: 229px;
    }
  }
  .lists {
    margin-top: 21px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
