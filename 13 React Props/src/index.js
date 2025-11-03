import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return(<div className="my-style">
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
      />
    <p>{props.tel}</p>
    <p>{props.mail}</p>
  </div>); 
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
    name="Beyonce"
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel="+123 456 789"
    mail="b@beyonce.com"/>
    <Card
    name="Rihanna"
    img="https://cdn.powergroup.com.tr/image/1280x1280/powerfm/u/Contents/r/i/rihanna-mu-zi-k-haber-1724139976.png"
    tel="+123 456 789"
    mail="rihanna@gmail.com"/>
  </div>,
  document.getElementById("root")
);
