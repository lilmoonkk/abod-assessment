const { initializeApp } = require( "firebase/app");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail  } = require( "firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyC3HwElApOuW4BP2nMUljyBHVOCbt25Uuo",
    authDomain: "temporary-de4c2.firebaseapp.com",
    projectId: "temporary-de4c2",
    storageBucket: "temporary-de4c2.appspot.com",
    messagingSenderId: "394389750559",
    appId: "1:394389750559:web:59a25866b24ff6ad42e62a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const Register = (email, password, callback) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        Logout()
        callback(200)
    }).catch(error => {
        console.log(error.message)
        callback(500)
    })
}

const Login = (email, password, callback) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        Logout()
        callback(200)
    }).catch(error => {
        console.log(error.message)
        callback(500)
    })
}

const Logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}

const ResetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        
    }).catch(error => {
        console.log(error.message)
    })
}

module.exports = {
    app,
    Register,
    Login,
    Logout,
    ResetPassword
};