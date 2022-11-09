import React from 'react';

import { FaDocker, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                
                src="https://seeklogo.com/images/H/health-care-and-fitness-logo-E7D64C603C-seeklogo.com.png"
                alt="fitness logo"
                name="Health & Fitness"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">
                    Flowbite
                  </Footer.Link>
                  <Footer.Link href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">
                    Github
                  </Footer.Link>
                  <Footer.Link href="#">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#">
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Flowbite™"
              year={2022}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="#"
                icon={FaFacebook}
              />
              <Footer.Icon
                href="#"
                icon={FaInstagram}
              />
              <Footer.Icon
                href="#"
                icon={FaTwitter}
              />
              <Footer.Icon
                href="#"
                icon={FaGithub}
              />
              <Footer.Icon
                href="#"
                icon={FaDocker}
              />
            </div>
          </div>
        </div>
      </Footer>
    );
};

export default Footer;