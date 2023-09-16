import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | undefined>(undefined);

  return (
    <div className="pt-10 ml-10">
      <div className="flex gap-2">
        {[...Array(5)].map((star, index) => {
          const id = index;
          const ratingValue = index + 1;
          
          return (
            <FaStar
              key={id}
              className="star"
              color={ratingValue <= (hover ?? (rating ?? 0)) ? "#ffc107" : "#e4e5e9"}
              size={30}
              cursor="pointer"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(undefined)}
              onClick={() => setRating(ratingValue)}
            />
          );
        })}
        <h2 className="pt-1">(21 reviews)</h2>
      </div>
    </div>
  );
};

export default StarRating;
