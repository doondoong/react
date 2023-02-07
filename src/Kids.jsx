import React, { useState } from 'react';
import Loading from './components/Loading';
import SelectBox from './components/SelectBox';
import useProducts from './hook/use-products';

export default function Kids() {
  const [sigun_nm, setSigun_nm] = useState('구리시 ');
  const [isLoading, error, kids] = useProducts({ sigun_nm: sigun_nm });
  const memo = '키즈카페 목록보기';

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SelectBox sigun_nm={sigun_nm} setSigun_nm={setSigun_nm} memo={memo} />
      <div className="flex justify-center">
        <table className="border border-slate-400 mt-2 w-full mx-2">
          <thead className="bg-gray-400">
            <th className="border border-slate-600">업체명</th>
            <th className="border border-slate-600">주소</th>
            <th className="border border-slate-600">오픈일</th>
            <th className="border border-slate-600">영업상태</th>
          </thead>
          <tbody>
            {kids &&
              kids?.Kidscafe[1].row.map((item, index) => {
                if (item.BSN_STATE_NM === '폐업') {
                  return;
                }
                return (
                  <tr key={index}>
                    <td className="border border-slate-600">
                      {item.BIZPLC_NM}
                    </td>
                    <td className="border border-slate-600">
                      {item.REFINE_LOTNO_ADDR}
                    </td>
                    <td className="border border-slate-600">
                      {item.LICENSG_DE}
                    </td>
                    <td className="border border-slate-600">
                      {item.BSN_STATE_NM}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
