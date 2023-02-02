import {useState, useEffect} from "react";
import { envVars } from "../vars/envVars";

export default function useProducts({sigun_nm}) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { API_KEY, API_KIDS_KEY } = envVars

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
        const url = `https://proxy.cors.sh/https://openapi.gg.go.kr/Kidscafe?Key=${API_KIDS_KEY}&pindex=1&SIGUN_NM=${sigun_nm}&pSize=100`
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

