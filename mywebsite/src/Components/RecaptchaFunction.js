import React from "react";


function RecaptchaFunction(){
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
        sitekey="6Leme9kUAAAAAOjN1HuM2j6lX4DcLJyZAUmIl6wY"
        render="explicit"
        verifyCallback={verifyCallback}
        onloadCallback={callback}
        theme="dark"
      />
    </div>
  );
}

export default RecaptchaFunction;
