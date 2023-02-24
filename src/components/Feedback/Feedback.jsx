import React from "react";
import FeedbackButtons from "./FeedbackButtons";
import Statistics from "./Statistics";

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,        
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
    
    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const positiveFeedbacke = Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)) || 0;
        return positiveFeedbacke;
    };

    render() {
        return (
            <div>
                <FeedbackButtons
                    onHeandleGood={this.heandleGood}
                    onHeandleNeutral={this.heandleNeutral}
                    onHeandleBad={this.heandleBad} />
            
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positiveFeedbacke={this.countPositiveFeedbackPercentage()} />
            </div>
            
       );
    }
}

export default Feedback;