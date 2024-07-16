import React from 'react';
import {Form, NavLink, useLoaderData, useRouteLoaderData} from 'react-router-dom';
import styles from './MainNavigation.module.scss';

const MainNavigation = () => {

    // 상위 라우트 페이지의 loader 데이터 불러오기
    const userData = useRouteLoaderData('user-data');
    // console.log('userData: ', userData);

    const activeFn = ({isActive}) => {
        // NavLink 컴포넌트에 className 프롭스에 함수를 전달하면
        // 첫번째 파라미터에 어떤 객체 정보를 준다.
        // console.log(aa);
        return isActive ? styles.active : undefined;
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <NavLink to='' className={activeFn} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='events' className={activeFn}>Events</NavLink>
                    </li>

                    {userData && (
                        <li>
                            <Form action='/logout' method='POST'>
                                <button style={{width: '100%'}}>Logout</button>
                            </Form>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation