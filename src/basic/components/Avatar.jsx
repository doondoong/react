import React from 'react';

export default function Avatar({img, isNew}) {

    return (
        <div className='avater'>
            <img className='photo' src={img} alt="error" />
            { isNew && <div className='new'>New</div>} 
        </div>
    );
}