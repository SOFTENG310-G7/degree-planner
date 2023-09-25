import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  openedData: any;
}

const StarRating: React.FC<StarRatingProps> = ({ openedData }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | undefined>(undefined);
  const [ratingChanged, setRatingChanged] = useState<boolean>(false);
  const [called, setCalled] = useState<boolean>(true);
  const [hasRated, setHasRated] = useState<boolean>(false);
  const [ratingCount, setRatingCount] = useState<number>(0);
  const [averageRating, setAverageRating] = useState<number>(0);

  // check if the rating has been changed, if so, submit the rating
  useEffect(() => {
    if (ratingChanged) {
      handleRatingSubmit();
    }
  }, [ratingChanged]);

  // this useEffect is called when the popup is opened and never again, it renders the rating if the user has rated before
  useEffect(() => {
    if (called) {
      handleGetSingleRating();
      handleGetAllRatings();
      setCalled(false);
    }
  }, [called]);

  // get average ratings and rating count
  const handleGetAllRatings = async () => {
    try {
      const data = { courseId: openedData.id };
      const query = new URLSearchParams(data);
      const response = await fetch(
        `http://localhost:3000/api/ratings/GET_all?${query.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // render the ratings
        const ratingData = await response.json();
        console.log(ratingData);
        setRatingCount(ratingData.numberOfRatings);
        setAverageRating(ratingData.averageRating);
      }
    } catch (error) {
      console.error("Error while getting the rating:", error);
    }
  };

  // get the rating from the database if the user has rated before
  const handleGetSingleRating = async () => {
    try {
      const data = { courseId: openedData.id };
      const query = new URLSearchParams(data);
      const response = await fetch(
        `http://localhost:3000/api/ratings/GET_single?${query.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // render the rating because user has rated before
        const ratingData = await response.json();
        setRating(ratingData.rating);
        setHasRated(true);
      }
    } catch (error) {
      console.error("Error while getting the rating:", error);
    }
  };

  const handleRatingSubmit = async () => {
    try {
      // Create a data object with the required information
      const data = {
        rating: rating,
        courseId: openedData.id,
      };

      if (hasRated) {
        //update the rating instead of posting new one
        const response = await fetch(
          "http://localhost:3000/api/ratings/PUT",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          // Successfully updated the review
          console.log("Review updated successfully");
        } else {
          console.error("Failed to update review");
        }
      } else {
        // Send a POST request to api/rating route using fetch
        const response = await fetch("http://localhost:3000/api/ratings/POST", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Successfully added the review
          console.log("Review added successfully");
        } else {
          console.error("Failed to add review");
        }
      }

    } catch (error) {
      console.error("Error while submitting the rating:", error);
    }
  };

  // check if the rating has been changed
  const updateRating = (ratingValue: number) => {
    if (ratingValue !== rating) {
      setRating(ratingValue);
      setRatingChanged(true);
    }
  };

  return (
    <div className="pt-10 ml-10">
      <div className="flex gap-2">
        <h2 className="pt-1">{ averageRating }</h2>
        {[...Array(5)].map((star, index) => {
          const id = index;
          const ratingValue = index + 1;

          return (
            <FaStar
              key={id}
              className="star"
              color={
                ratingValue <= (hover ?? rating ?? 0) ? "#ffc107" : "#e4e5e9"
              }
              size={30}
              cursor="pointer"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(undefined)}
              onClick={() => {
                updateRating(ratingValue);
              }}
            />
          );
        })}
        <h2 className="pt-1">({ ratingCount })</h2>
      </div>
    </div>
  );
};

export default StarRating;
