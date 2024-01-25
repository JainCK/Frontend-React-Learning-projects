import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { Auth } from "firebase/auth";

const onCaptchaVerify = () => {
    if (!window.RecaptchaVerifier){
        window.RecaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: (response) => {
                    onSignup();
                },
                "expired-callback": () => {}, 
                },
                Auth 
        );
    }
}


const onSignup = () => {
   onCaptchaVerify();

   const appVerifier = window.RecaptchaVerifier;

   const formatPh = '+' + Phone;

   signInWithPhoneNumber(auth)

}

function OnAuth(){
    console.log("World")
}

export { onSignup, OnAuth } 