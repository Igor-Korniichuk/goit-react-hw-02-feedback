import React from "react";

const Statistics = ({ good, neutral, bad, total, positiveFeedbacke }) => (
    <div>
        <p>Statistics</p>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>PositiveFeedbacke: {positiveFeedbacke} %</span>
    </div>
);

export default Statistics;