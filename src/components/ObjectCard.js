import React from 'react';

const ObjectCard = ({object, display}) => {
    

    const cardInfo = display.map((e, i)=>{
        return i===0 ? <h3 key={i}>{object[e]}</h3> :
        <p className="tl" key={i}><span className="b ttc">{e.replace(/[_]/g,' ')}: </span>{object[e]}</p>;
    });
    
    return (
        <div className="bg-gold dib br3 ma2 pb3 pl3 pr3 swcard">
            {cardInfo}
        </div>
    );
}

export default ObjectCard;