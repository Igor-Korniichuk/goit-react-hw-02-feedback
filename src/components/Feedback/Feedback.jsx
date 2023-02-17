import React from "react";

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    heandleGood = () => {
        this.setState(prevState => ({            
                good: prevState.good + 1,            
        }))
    };
    heandleNeutral = () => { 
        this.setState(prevState => ({            
                neutral: prevState.neutral + 1,            
        }))
    };
    heandleBad = () => {
        this.setState(prevState => ({            
                bad: prevState.bad + 1,            
        }))
     };

    render() {
        return (
            <div>
                <p>Please leave feedbacke</p>

                <button type="button" onClick={this.heandleGood}>Good</button>
                <button type="button" onClick={this.heandleNeutral}>Neutral</button>
                <button type="button" onClick={this.heandleBad}>Bad</button>

                <p>Statistics</p>
                <span>Good: {this.state.good}</span>
                <span>Neutral: {this.state.neutral}</span>
                <span>Bad: {this.state.bad}</span>
                
            </div>
            
       );
    }
}

export default Feedback;