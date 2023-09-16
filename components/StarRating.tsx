import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  openedData: any;
}

const StarRating: React.FC<StarRatingProps> = ({ openedData }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | undefined>(undefined);

  console.log(openedData.id);

  const handleRatingSubmit = async () => {
    try {
      // Replace with your actual cookie and route URL
      const routeUrl = "/api/addReview"; // Update with your route URL

      // Check if a rating has been selected
      if (rating !== null) {
        // Create a data object with the required information
        const data = {
          rating: rating,
          courseId: openedData.id, // Assuming you have access to courseId in openedData
        };

        // Send a POST request to your route using fetch
        const response = await fetch(routeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Successfully added the review, you can handle this as needed
          console.log("Review added successfully");
        } else {
          console.error("Failed to add review");
        }
      } else {
        console.error("Please select a rating before submitting.");
      }
    } catch (error) {
      console.error("Error while submitting the rating:", error);
    }
  };


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
