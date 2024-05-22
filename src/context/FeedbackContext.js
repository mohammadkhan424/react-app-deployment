import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //to add feedback
  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  }

  //to delete feedback
  function deleteFeedback(id) {
    if (window.confirm("you want to delete this item, are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  //to update feedback
  function updateFeedback(id, upItem) {
    // console.log(id, upItem);
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...upItem } : item;
      })
    );
  }
  //to edit feedback
  function editFeedback(item) {
    setFeedbackEdit({ item, edit: true });
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

/*   stating values for feedback rating and text
{ id: 3, text: "some text", rating: 4 },
    { id: 5, text: "some text", rating: 6 },    */
