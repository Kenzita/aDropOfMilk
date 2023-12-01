import { useEffect, useState } from "react";

export default function Rating({ maxRating = 10, onChange }) {
    const [currentRating, setCurrentRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    // console.log(currentRating);

    function choiceNote(note) {
        currentRating === note ? setCurrentRating(0) : setCurrentRating(note);
    }

    useEffect(() => {
        onChange(currentRating);
    }, [currentRating]);

    return (
        <div className="d-flex flex-column align-items-center mt20 background">
            <h2 className="p10">Ma note</h2>
            <div className="d-flex justify-content-center">
                {[...Array(maxRating)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <p
                            className={`hand star ${ratingValue <= (hoverRating || currentRating) ? "active" : ""
                                }`}
                            onClick={() => choiceNote(ratingValue)}
                            onMouseLeave={() => setHoverRating(0)}
                            onMouseEnter={() => setHoverRating(ratingValue)}
                            key={index}
                        >
                            &#9733;
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
