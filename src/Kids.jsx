import React,{useState} from 'react';
import Loading from './components/Loading'
import SelectBox from './components/SelectBox';
import useProducts from './hook/use-products';

export default function Kids() {
    
    const [sigun_nm, setSigun_nm ] = useState('구리시 ')
    const [loading, data] = useProducts({sigun_nm: sigun_nm})

    return !loading ? (
        <div>
            <SelectBox sigun_nm={sigun_nm} setSigun_nm={setSigun_nm} />
            <table className='border-collapse border border-slate-400 mt-2'>
                <thead>
                    <th className='border border-slate-300'>업체명</th>
                    <th className='border border-slate-300'>주소</th>
                    <th className='border border-slate-300'>오픈일</th>
                    <th className='border border-slate-300'>영업상태</th>
                </thead>
                <tbody>
                {data?.map((item , index) => {
                    if(item.BSN_STATE_NM === '폐업') {
                        return 
                    }
                    return (
                    <tr key={index}>
                        <td className='border border-slate-300'>{item.BIZPLC_NM}</td>
                        <td className='border border-slate-300'>{item.REFINE_LOTNO_ADDR}</td>
                        <td className='border border-slate-300'>{item.LICENSG_DE}</td> 
                        <td className='border border-slate-300'>{item.BSN_STATE_NM}</td> 
                    </tr>)
                })} 
                </tbody>
            </table>
        </div>
    ) : <Loading />
}

