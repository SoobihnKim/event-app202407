import React from 'react';
import {useRouteLoaderData} from "react-router-dom";

const Main = () => {

    // 상위 라우트 페이지의 loader 데이터 불러오기
    const { email, role } = useRouteLoaderData('user-data');
    // console.log('userData: ', userData);

    return (
        <>
            <h2>{email}님 환영합니다.</h2>
            <h3>현재 권한: [{ role }]</h3>
            <button>Logout</button>
        </>
    );
};

export default Main;