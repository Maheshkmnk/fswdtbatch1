import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";


const firebaseConfig = {
  your firebase settings paste here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();


export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((result) =>{
        console.log(result);
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL

        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("profilePic",profilePic)
        
    })
    .catch((error) =>{
        console.log(error);
    });
}

export const signingOut = () =>{
    console.log('CALLING')
    signOut(auth).then(() => {
        // Sign-out successful.
        window.localStorage.clear();
        console.log('successful')
      }).catch((error) => {
        // Sign-in error
        console.log(error)
      });
      console.log('CALLED')
}


  
