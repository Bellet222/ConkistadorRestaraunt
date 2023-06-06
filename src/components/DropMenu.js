import React from 'react';

const DropMenu = ({setEatValue, setActiveEat, ...props}) => {
    return (
        <div>
            <p onClick={(e) => {setEatValue(props.name); setActiveEat(false); e.stopPropagation()}}>{props.name}</p>
        </div>
    );
};

export default DropMenu;