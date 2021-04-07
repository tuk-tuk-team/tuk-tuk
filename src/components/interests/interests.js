import React from 'react';

const Interests = ({interests}) => {
    return (
        <div className = 'interests'>
            <h2>Інтереси</h2>
            <div className = 'interests-div'>
                {interests.map((item) => 
                    <div key = {item.id} className = 'interest-tag'>
                        <span>{item.value}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Interests;