import React from "react";

function Footer() {
  
  var currYear = new Date().getFullYear();
  
  return  (
    <footer>
      <p>Gayatrikulkarni copyright @ {currYear}</p>
    </footer>
 );
}

export default Footer;