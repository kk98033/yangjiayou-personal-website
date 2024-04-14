import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy; 2024 {" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
              <div>
                <small>Contact Me: <i class="fas fa-envelope"></i> <a href="mailto:a8829037@gmail.com" target="_blank">a8829037@gmail.com</a></small>
              </div>
              <div>
                <small>based on original work by <a href="https://github.com/Dorota1997/react-frontend-dev-portfolio" target="_blank">Davina Griss.</a></small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
