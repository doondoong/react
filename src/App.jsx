import React,{useEffect, useState} from 'react';

export default function App() {

    fetch("https://proxy.cors.sh/https://openapi.gg.go.kr/Kidscafe?Key=5bd2875e523143338161caeb75b2f4d5&pindex=1&pSize=50&SIGUN_NM=남양주시",{
        method: "POST",
        headers: {
            'x-cors-api-key': 'temp_2f26b6f293511613cad7af0618d3f4dc',
            "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //     Key: "5bd2875e523143338161caeb75b2f4d5",
        //     Type: "JSON",
        //     pindex: 1,
        //     pSize: 50,
        //     SIGUN_NM: "남양주시"
        // }),
    }).then((response) => console.log(response))

    return (
        <div>
            안녕하세요
        </div>
    );
}

