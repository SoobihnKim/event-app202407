import React, {useEffect, useRef} from 'react';

const EmailInput = () => {

    const inputRef = useRef();

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
            />
        </>
    );
};

export default EmailInput;