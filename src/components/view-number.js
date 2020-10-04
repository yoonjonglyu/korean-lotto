import React from 'react';

const viewNumber = ({ number } = props) => {
    const ballList = number.map((arr, index) => 
        (<li key={index}>{arr.number}</li>)
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