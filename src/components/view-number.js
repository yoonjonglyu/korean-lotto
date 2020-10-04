import React from 'react';

const viewNumber = (props) => {
    const ballList = props.number.map((number) => 
        (<li>{number}</li>)
    );
    
    return (
        <div className="view-box">
            <ul className="lotto-numbers">
                {ballList}
            </ul>
        </div>
    )
};

export default viewNumber;