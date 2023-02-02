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
            <table className='border-2' style={{marginTop: '20px'}}>
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

