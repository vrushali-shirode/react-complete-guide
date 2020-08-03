import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const person = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <input type="text" value="Next is DatePicker"/>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            <input type="text" value="Next is DatePicker"/>
        </div>
    );
};

export default person;