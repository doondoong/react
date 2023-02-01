import React from 'react';

export default function SelectBox({setSigun_nm}) {
    const handleChange = (e) => {
        setSigun_nm(e.target.value)
    }
    return (
        <select onChange={handleChange} name='choice' style={{width: '150px', height: '30px', marginTop: '10px', marginLeft: '10px'}}>
            <option value="구리시 ">구리시</option>
            <option value="남양주시">남양주시</option>
        </select>
    );
}

