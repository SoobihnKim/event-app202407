import React from "react";
import EventForm from "../components/Event/EventForm";
import {redirect} from "react-router-dom";

const NewEvent = () => {
    return <EventForm method='post'/>;

};

export default NewEvent;
