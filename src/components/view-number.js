import React from 'react';

const viewNumber = ({ number } = props) => {
    const ballList = number.map((num, index) => {
        let color, bonus;

        if(num >= 40){
            color = "green";
        } else if(num >= 30){
            color = "gray";
        } else if(num >= 20){
            color = "red";
        } else if(num >= 10){
            color = "blue";
        } else {
            color = "orange";
        }

        if(index === 6){
            bonus = ' bonus';
        } else {
            bonus = '';
        }

    return (<li key={index} className={color + (bonus)}>{num}</li>);
    }
        
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