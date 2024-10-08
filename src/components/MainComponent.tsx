import { MainCntainer } from "./Style";
import CameraImg from "../images/illustration-editor-mobile.svg";
import MobileImg from "../images/illustration-phones.svg";
import PcImg from "../images/illustration-laptop-mobile.svg";

export default function MainComponent() {
  return (
    <MainCntainer>
      <h1>Designed for the future</h1>
      <div className="camera_div">
        <img src={CameraImg} alt="camera-img" />
        <div>
          <h1>Introducing an extensible editor</h1>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h1>Robust content management</h1>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
      <div className="mobile_div">
        <img src={MobileImg} alt="mobile-img" />
        <div className="texts_div">
          <h1>State of the Art Infrastructure</h1>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      <div className="pc_div">
        <img src={PcImg} alt="" />
        <div className="text_div">
          <h1>Free, open, simple</h1>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h1 id="powerful">Powerful tooling</h1>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </MainCntainer>
  );
}
