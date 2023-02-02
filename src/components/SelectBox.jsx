import React from 'react';

export default function SelectBox({sigun_nm, setSigun_nm}) {

    const handleChange = (e) => {
        setSigun_nm(e.target.value)
    }

    return (
        <div className='flex justify-end items-center mr-4 '>
            <select 
            onChange={handleChange} s
            value={sigun_nm} 
            name='choice' 
            className='bg-sky-500 hover:bg-sky-700 rounded-lg'
            style={{width: '150px', height: '30px', marginTop: '10px', marginLeft: '10px'}}>
                <option value="구리시 ">구리시</option>
                <option value="남양주시">남양주시</option>
            </select>
        </div>
    );
}

