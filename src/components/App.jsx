import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Notification } from './Notification/Notification';
// import { useEffect } from 'react';

export function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

 const feedbackChange = feedback => {

    switch(feedback) {
      case 'good':
       setGood(prevState => prevState + 1);
      break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
     
      default:
        break;
    }
  };


  const countTotalFeedback = () => {
    return  good + neutral + bad;

  };

  const countPositiveFeedback = () => {
   
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  const feedbacks = ['good', 'neutral', 'bad'];

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbacks}
            onBtnClick={feedbackChange}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  
};