import React from 'react';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/02/238f0a3e8b567db1229b0f27220033341.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304"
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "http://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg"
  },
  {
    id: 4,
    name: "Doncasu",
    image: "http://m.yum-yumfood.com/web/product/big/201607/29_shop1_382074.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg"
  }
];

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

function App() {
  return (
  <div>
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>)}
  </div>
  );
}

export default App;
