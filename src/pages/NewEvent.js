import React, {useContext, useEffect} from "react";
import EventForm from "../components/EventForm";
import {useNavigate, useRouteLoaderData} from "react-router-dom";
import EventContext from "../components/context/event-context";

const NewEvent = () => {

    const {role} = useRouteLoaderData('user-data');

    const navigate = useNavigate();

    const {totalEventCount} = useContext(EventContext);

    // 라우트 가드 (권한, 개수 검증)
    useEffect(() => {
        if(role === 'COMMON' && totalEventCount >= 4) {
            alert('일반 회원은 이벤트 생성이 4개로 제한됩니다.');
            navigate('/events');
        }
    }, [totalEventCount]);

    return <EventForm method='post'/>;

};

export default NewEvent;
