import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    <ul>
      <img
        src="https://cdn.ye-mek.net/App_UI/Img/out/650/2020/04/karisik-pizza-resimli-yemek-tarifi(19).jpg"
        alt="pizza"
      />
      <br />
      <img
        src="https://i.nefisyemektarifleri.com/2020/03/19/firinda-sebze-kizartma-hafif-ve-leziz-3.jpeg"
        alt="mixed fry"
      />
      <br />
      <img
        src="https://www.shopsa.com.tr/upload/news/960x600/mant.jpg"
        alt="mantı"
      />
    </ul>
  </div>,
  document.getElementById("root")
);
