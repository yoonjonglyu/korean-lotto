import React from 'react';

const viewNumber = ({ number } = props) => {
    const ballList = number.map((num, index) => 
        (<li key={index}>{num}</li>)
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