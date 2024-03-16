import React, { useState } from 'react';
import './index.css';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ noOfStars }) => {
    const [rating, setRating] = useState(-1);
    const [hover, setHover] = useState(0);

    const handleClick = (currentIndex) => {
        setRating(currentIndex);
    };

    const handleMouseEnter = (currentIndex) => {
        setHover(currentIndex);
    };

    const handleMouseLeave = () => {
        setHover(-1); // Reset hover state
    };

    return (
        <div className='star'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    const currentIndex = index + 1;

                    return (
                        <FaStar
                            key={index}
                            className={index < Math.max(hover, rating) ? 'active' : 'inactive'} // Adjusted condition
                            onClick={() => handleClick(currentIndex)}
                            onMouseEnter={() => handleMouseEnter(currentIndex)}
                            onMouseLeave={handleMouseLeave} // No need to pass index here
                            size={40}
                        />
                    );
                })
            }
        </div>
    );
};

export default StarRating;
