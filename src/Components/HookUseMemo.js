import React, { useState, useMemo } from 'react';

// giải sử hàm này chạy tốn nhiều thời gian
function expensiveFunction(number) {
  console.log('bat dau');
  const start = new Date();

  //doi o day 3 giay
  while (new Date() - start < 3000);

  console.log('Ket thuc', new Date() - start, 'ms');

  return number * number;
}

function HookUseMemo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);

  const number = useMemo(() => {
    return expensiveFunction(num); // sau khi chạy hàm này với đối số là num, giá trị của hàm được lưu vào bộ nhớ
  }, [num]); // khi re-render DOM, nếu giá trị num thay đổi, hàm trong useMemo được thực thi lại, nếu không thì hàm này sẽ có giá trị dược lưu trong bộ nhớ trước đó
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <p>Number: {number}</p>
    </div>
  );
}

export default HookUseMemo;
