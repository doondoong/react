import React,{useEffect, useState} from 'react';
import Loading from './components/Loading'
import SelectBox from './components/SelectBox';
export default function App() {
    const [data, setData ] = useState()
    const [sigun_nm, setSigun_nm ] = useState('구리시 ')
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        const url = `https://proxy.cors.sh/https://openapi.gg.go.kr/Kidscafe?Key=5bd2875e523143338161caeb75b2f4d5&pindex=1&SIGUN_NM=${sigun_nm}&pSize=100`
        postData(url).then((data) => {
            console.log(data,'firstData')
            setData(data.Kidscafe[1].row)
            setLoading(false)
        })
    },[sigun_nm])

    console.log(loading)
    return !loading ? (
        <div>
            <SelectBox sigun_nm={sigun_nm} setSigun_nm={setSigun_nm} />
            <table border="1" style={{marginTop: '20px'}}>
                <thead>
                </thead>
                <th>업체명</th>
                <th>주소</th>
                <th>오픈일</th>
                <th>영업상태</th>
                <tbody>
                {data?.map((item , index) => {
                    if(item.BSN_STATE_NM === '폐업') {
                        return 
                    }
                    return (
                    <tr key={index}>
                        <td>{item.BIZPLC_NM}</td>
                        <td>{item.REFINE_LOTNO_ADDR}</td>
                        <td>{item.LICENSG_DE}</td> 
                        <td>{item.BSN_STATE_NM}</td> 
                    </tr>)
                })} 
                </tbody>
            </table>
        </div>
    ) : <Loading />
}

