import React,{useEffect, useState} from 'react';

export default function App() {
    const url = 'https://openapi.gg.go.kr/Kidscafe'
    const prams = {
        Key: "5bd2875e523143338161caeb75b2f4d5",
        Type: "JSON",
        pindex: 1,
        pSize: 50,
        SIGUN_NM: "남양주시"
    }
    useEffect(async ()=>{
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                Authentication: '5bd2875e523143338161caeb75b2f4d5'
            },
            body: JSON.stringify()
        });
        if(response.ok) {
            let json = await response.json()
            console.log(json,'json')
        } else {
            alert("HTTP-Error: " + response.status);
        }
    },[])
    return (
        <div>
            안녕하세요
        </div>
    );
}

