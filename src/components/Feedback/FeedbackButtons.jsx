import React from "react";

const FeedbackButtons = ({ onHeandleGood, onHeandleNeutral, onHeandleBad }) => (
    <div>
        <p>Please leave feedbacke</p>

        <button type="button" onClick={onHeandleGood}>Good</button>
        <button type="button" onClick={onHeandleNeutral}>Neutral</button>
        <button type="button" onClick={onHeandleBad}>Bad</button>
    </div>
);

export default FeedbackButtons;