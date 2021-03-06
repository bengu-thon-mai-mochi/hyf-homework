import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddForm(props){
    const {setDescription, selectedDate, handleAdd, selectDate} = props;
    return (
        <>
            <label>
                Description:
            </label>
            <input type="text" onChange={setDescription} />
            
            <label>
                Set deadline:
            </label>
            <DatePicker
                selected={selectedDate}
                onSelect={selectDate}
            />

            <button onClick={handleAdd}>Add</button>
        </>
    )
};

export default AddForm;
