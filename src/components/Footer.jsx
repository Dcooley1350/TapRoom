import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
    var copyrightStyle = {
        marginBlockStart: "0px",
        marginBlockEnd: "0px",
        paddingBottom: "5px",
        paddingTop: "5px"
    }
    var footerStyle = {
        position: "absolute",
        bottom: "0",
        width: "100%",
        paddingTop: "0px"

    
    }
  return (
    <footer style={footerStyle} className="center page-footer">
        <p style={copyrightStyle}>© 2019 Copyright Devin Cooley</p>
    </footer>
  );
}

export default Footer;
