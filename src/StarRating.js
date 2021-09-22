import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => {
    return [...Array(length)];
};

const Star = ({ selected = false, onSelect }) => {
    return <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>
};

const StarRating = ({ length = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <>
        {createArray(length).map((n, i) => 
            <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>
        )}
        <p>{selectedStars} of {length}</p>
        </>
    );
};

export default StarRating;