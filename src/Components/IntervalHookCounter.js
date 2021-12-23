import React, { useEffect, useState } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const ticks = () => {
    setCount(count + 1);
  };
  //Nếu useEffect chỉ nhận 1 arrow function làm đối số đầu tiên ---> sau 1 lần biến trạng thái thay đổi thì render lại DOM sau đó gọi lại useEffect
  //Nếu useEffect nhận thêm 1 đối số thứ 2 là 1 mảng rỗng ---> useEffect chỉ được gọi sau lần render DOM đầu tiền, dù biến trạng thái thay đối nhưng useEffect cũng không được gọi lại
  //Nếu useEffect nhận vào đối số thứ 2 chứa deps ---> mỗi khi deps thay đổi thì sẽ render lại DOM và useEffect sẽ được gọi lại
  useEffect(
    () => {
      const interval = setInterval(ticks, 1000);
      return () => {
        clearInterval(interval);
      };
    }
    // [count]
  );
  return <div>{count}</div>;
}

export default IntervalHookCounter;
