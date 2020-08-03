import React from 'react';
import Card from './Card';
const cardList=({robots})=> {
    const cardArray = robots.map((_user, i)=>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div>
           {cardArray}
        </div>
    )
}

export default cardList;