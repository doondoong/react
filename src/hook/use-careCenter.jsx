import {useState, useEffect} from "react";
import { envVars } from "../vars/envVars";

export default function useCareCenter({sigun_nm}) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { API_KEY, API_CARE_KEY } = envVars

    async function postData(url = '') {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'x-cors-api-key': API_KEY,
                "Content-Type": "application/json",
            },
        });
        return response.json()
    }

    useEffect(()=>{
        setLoading(true)
        const url = `https://proxy.cors.sh/https://openapi.gg.go.kr/PostnatalCare?KEY=${API_CARE_KEY}&TYPE=JSON&SIGUN_NM=${sigun_nm}&pIndex=1&pSize=100`
        postData(url).then((data) => {
            setData(data.PostnatalCare[1].row)
        }).catch((e) => {
            setError(`api error: ${e}`)
            alert(error)
        }).finally(()=>{
            setLoading(false)
        })
    },[sigun_nm])

    return [loading, data]
}

