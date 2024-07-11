import React, {useEffect, useRef} from 'react';

const EmailInput = () => {

    const inputRef = useRef();

    // 이메일 패턴 검증
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 패턴 검사
        return emailPattern.test(email);
    };

    const changeHandler = e => {
      const email = e.target.value;
      const isValid = validateEmail(email);
        console.log('isValid: ', isValid);
    };

    // 렌더링 되자마자 입력창에 포커싱
    useEffect(() => {
        inputRef.current.focus();
    }, []); // 한번만 실행하니 빈 배열

    return (
        <>
            <p>Step 1: 유효한 이메일을 입력해주세요.</p>
            <input
                ref={inputRef}
                type="email"
                placeholder="Enter your email"
                onChange={changeHandler}
            />
        </>
    );
};

export default EmailInput;