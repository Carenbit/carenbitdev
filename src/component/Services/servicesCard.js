import React from 'react';
import './servicesCard.css';
const ColorBox = ({ cardColor,TextColor,SubheadingColor,ImgSrc,TextContent,Subheading }) => {
    return <div className="cardContainer"style={{ backgroundColor: cardColor }} >
      <div className="Card">
       <img className="Ellipse1" src={ImgSrc} alt="xyz"/> 
        <div className="labelName"style={{color:SubheadingColor}}>{Subheading}</div>
        <div className="textContent" style={{color:TextColor}}>
         {TextContent}
        </div>
      </div>
      </div>


};

  export default ColorBox;