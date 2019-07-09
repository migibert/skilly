import React from 'react';

// Expected props: review { title, date, reviewee, reviewer }
export default function ReviewItem(props) {    
    return (      
      <h1>{`${props.review.reviewee} - ${props.review.date} by ${props.review.reviewer}`}</h1>
    );
}