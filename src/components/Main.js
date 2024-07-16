import React from 'react';
import {Form, useRouteLoaderData} from "react-router-dom";
import {logoutAction} from "../pages/Logout";

const Main = () => {

    // 상위 라우트 페이지의 loader 데이터 불러오기
    const {email, role} = useRouteLoaderData('user-data');
    // console.log('userData: ', userData);

    return (
        <>
            <h2>{email}님 환영합니다.</h2>
            <h3>현재 권한: [{role}]</h3>
            {/* 다른 라우트의 액션을 트리거하는 방법 */}
            <Form action='/logout' method='POST'>
                <button>Logout</button>
            </Form>
        </>
    );
};

export default Main;