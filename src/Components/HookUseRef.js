import React, { useRef, useState } from 'react';

function HookUseRef() {
  const [count, setCount] = useState(0);
  const obj = { current: 0 };
  const countRef = useRef(0);
  console.log(countRef); // { current: 0 } ---> trả về 1 object có current: initialValue

  const handleClick = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
    obj.current = obj.current + 1;
  };

  return (
    <div>
      {/* Mỗi lần bấm nút -> count tăng, countRef.current tăng -> 
    re-render DOM countRef vẫn tham chiếu đến 1 object và khi bấm nút thì countRef.current đã tăng
    nên sau khi re-render DOM thì countRef.current = count */}
      <h2>{countRef.current}</h2> {/* giá trị countRef.current = count */}
      <div></div>
      {/* Khi bấm nút -> re-render DOM thì giá trị của biến obj băng 1 object mới giống như object đã khởi tạo 
nên khi bấm nút obj.current không tăng */}
      <h2>{obj.current}</h2> {/* giá trị obj.current = 0 */}
      <button onClick={handleClick}>Tăng count</button>
    </div>
  );
}

export default HookUseRef;
