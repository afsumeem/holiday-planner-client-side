import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {

    const auth = getAuth();

    const [user, setUsers] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");



    //create and sign in user with email and password

    const getUserName = e => {
        setName(e.target.value);
    };
    const getUserEmail = e => {
        setEmail(e.target.value);

    };
    const getUserPassword = e => {
        setPassword(e.target.value);

    };


    const handleRegistration = e => {
        e.preventDefault();

        if (password.length > 6) {
            setError("password should have 6 character")
            return;
        } if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password must contain 2 upper case")
            return;
        }

        console.log(email, password)
        registerNewUser(email, password);
        processLogin(email, password);
    };


    //register new user

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = (result.user);
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
                console.log(setUserName);
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    //user sign in with email and password
    const processLogin = (email, password) => {
        setIsLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUsers(result.user);
                setError('');
                setUserName();
                console.log(user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    //set user name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    //verify users Email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    };


    //reset password

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                alert('Password Reset Successfully! Check your email!!')
            })
    }


    //Google sign in
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    };


    //user state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [isLoading])



    //Sign out

    const logOut = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))

    };


    //return all functions
    return {
        user,
        setUsers,
        error,
        setError,
        name,
        email,
        password,
        handleResetPassword,
        getUserName,
        getUserEmail,
        getUserPassword,
        verifyEmail,
        processLogin,
        handleRegistration,
        signInUsingGoogle,
        isLoading,
        logOut,
        registerNewUser
    }
};

export default useFirebase;

