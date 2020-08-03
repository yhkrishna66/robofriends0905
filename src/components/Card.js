import React from 'react';
import '../css/style.css'


const Card= ({name,email,id})=> {
  return (
    <div className="tc grow bg-light-green br3 ma2 dib bw2 shadow-5">
          <img src={`https://robohash.org/${id}?100x100`} alt="robots"/>
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  );
}

export default Card;
