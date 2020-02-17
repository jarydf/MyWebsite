import React from "react";


function Recaptcha(){
var Recaptcha = require('react-recaptcha');
 
// specifying your onload callback function
var callback = function () {
  console.log('Done!!!!');
};
 
// specifying verify callback function
var verifyCallback = function (response) {
  console.log(response);
};

  return (
    <div className="recaptcha">
      <Recaptcha
        sitekey="6Lc6fdkUAAAAAIztBqxPbmiAH_tVtbVc8agF7syi"
        render="explicit"
        verifyCallback={verifyCallback}
        onloadCallback={callback}
        theme="dark"
      />
    </div>
  );
}

export default Recaptcha;
