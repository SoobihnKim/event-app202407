import React, {useEffect, useState} from 'react';
import LoginForm from "../components/auth/LoginForm";
import Main from "../components/Main";

const WelcomePage = () => {

    console.log('welcomePage 실행');

    // 로그인 여부
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem);

    useEffect(() => {
        const userData = localStorage.getItem('userData');

        if (userData) setIsLoggedIn(true);
        else setIsLoggedIn(false);
    }, [isLoggedIn]);

    return (
        <>
            {!isLoggedIn && <LoginForm/>}
            {isLoggedIn && <Main/>}
        </>
    );
};

export default WelcomePage;