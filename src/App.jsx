import React,{useEffect, useState} from 'react';

export default function App() {
    const url = 'https://openapi.gg.go.kr/Kidscafe'
    const prams = {
        Type: "JSON",
        pindex: 1,
        pSize: 50,
        SIGUN_NM: "남양주시"
    }
    useEffect(async ()=>{
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                Authentication: 'f7046f5cf7444b2798ba3df8a1aae833'
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
            
        </div>
    );
}

