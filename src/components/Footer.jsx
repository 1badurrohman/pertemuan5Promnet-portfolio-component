import React, { Component } from 'react';

class Footer extends Component {
  render() {
    // Menarik data 'colors' dari props class
    const { colors } = this.props;

    return (
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: colors.brown,
          color: "#FFFFFF",
          fontSize: "13px",
        }}
      >
        © 2026 Ihda Ibadurrohman
      </footer>
    );
  }
}

export default Footer;