import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.lenght === 0) {
    return "no feedback yet";
  } else {
    return (
      <div className="feedback-item">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default FeedbackList;
