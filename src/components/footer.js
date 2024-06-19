import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLinkGroup,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function Contact() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <FooterDivider />
        <div className="w-full flex justify-center items-center">
          <FooterLinkGroup>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center mb-4">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
              <FooterIcon href="#" icon={BsDribbble} />
            </div>
          </FooterLinkGroup>
        </div>
        <FooterCopyright href="#" by="Landing Page PAT" year={2024} />
      </div>
    </Footer>
  );
}

export default Contact;
