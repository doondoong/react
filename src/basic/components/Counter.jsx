import React, {useState} from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0)
    const { setAllCount, allCount } = props
    const handleClick = () => {
        setCount((prev) => prev + 1)
        setAllCount((prev) => prev + 1)
    }
    return (
        <div>
            <b style={{fontSize: '40px'}}>{count} </b> <span>/{allCount}</span><br></br>
            <button style={{height: '30px', width: '60px'}} onClick={handleClick}>추가</button>
        </div>
    );
}