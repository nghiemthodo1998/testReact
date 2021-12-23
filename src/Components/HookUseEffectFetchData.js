import React, { useEffect, useState } from 'react';
import axios from 'axios';
function HookUseEffectFetchData() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookUseEffectFetchData;
