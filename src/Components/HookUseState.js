import React, { useState } from 'react';

function HookUseState() {
  const [items, setItems] = useState([]); // khái báo biến trạng thái items với initialState là mảng rỗng

  const addItem = () => {
    setItems([
      //sử dụng setItems để cập nhật giá trị của biến items
      ...items, // vì setItems sẽ thay thế giá trị cũ bằng giá trị mới nên phải sử dụng spread operator (...) để truyền các giá trị cũ của trạng thái trước)
      {
        id: items.length + 1,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookUseState;
