import React from "react";

export default function SelectBox({ sigun_nm, setSigun_nm, memo }) {
  const handleChange = (e) => {
    setSigun_nm(e.target.value);
  };

  return (
    <div className="flex justify-between items-center mx-4 mt-4 mb-3">
      <div>✔구리 남양주 조회가능  </div> <div className="text-2xl font-semibold">{memo}</div>
      <select
        onChange={handleChange}
        s
        value={sigun_nm}
        name="choice"
        className="bg-sky-500 hover:bg-sky-700 rounded-lg w-36 h-8"
      >
        <option value="구리시 ">구리시</option>
        <option value="남양주시">남양주시</option>
      </select>
    </div>
  );
}