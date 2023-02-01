import React,{useEffect, useState} from 'react';

export default function App() {
    const [data, setData ] = useState()
    const url = 'https://proxy.cors.sh/https://openapi.gg.go.kr/Kidscafe?Key=5bd2875e523143338161caeb75b2f4d5&pindex=1&pSize=50&SIGUN_NM=남양주시'
    async function postData(url = '') {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'x-cors-api-key': 'temp_2f26b6f293511613cad7af0618d3f4dc',
                "Content-Type": "application/json",
            },
        });
        return response.json()
    }
    useEffect(()=>{
        postData(url).then((data) => {
            console.log(data,'firstData')
            setData(data.Kidscafe[1].row)
        })
    },[])

    console.log(data ,'data')
    return (
        <div>
            <table border="1">
                <thead>
                </thead>
                <th>업체명</th>
                <th>주소</th>
                <th>오픈일</th>
                <th>영업상태</th>
                <tbody>
                {data?.map((item, index) => {
                    return (
                    <tr>
                        <td>{item.BIZPLC_NM}</td>
                        <td>{item.REFINE_LOTNO_ADDR}</td>
                        <td>{item.LICENSG_DE}</td> 
                        <td>{item.BSN_STATE_NM}</td> 
                    </tr>)
                })} 
                </tbody>
            </table>
        </div>
    );
}

