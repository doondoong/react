import React,{useEffect, useState} from 'react';

export default function App() {

    fetch("/Kidscafe",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Key: "5bd2875e523143338161caeb75b2f4d5",
            Type: "JSON",
            pindex: 1,
            pSize: 50,
            SIGUN_NM: "남양주시"
        }),
    }).then((response) => console.log(response))

    return (
        <div>
            안녕하세요
        </div>
    );
}

