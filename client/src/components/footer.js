import React from 'react';

const Footer = () => {
	return (
        <footer className="page-footer light-blue darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Team Maria</h5>
                <p className="grey-text text-lighten-4">We develop and we create fast solutions.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Support</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Report Problems</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Copyright Project Maria (LBMJ)
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
		);
};

export default Footer;

