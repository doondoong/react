import {useState, useEffect} from "react";

export default function useProducts({sigun_nm}) {
    const [data, setData] = useState()
    const [error, setError] = useState()
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
            setData(data.Kidscafe[1].row)
        }).catch((e) => {
            setError(`api error: ${e}`)
            alert(error)
        }).finally(()=>{
            setLoading(false)
        })
    },[sigun_nm])

    return [loading, data]
}

