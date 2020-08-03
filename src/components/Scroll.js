import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', overflowX: 'hidden',border: '5px solid black',height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;