import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ReviewItem from './ReviewItem';

const fakeReviews = [
  {
    title: "Bi Annual Review", 
    date: "2019-06-06",
    reviewer: "Mikael Gibert",
    reviewee: "Théophile Dunoyer de Segonzac",
  },  
]

export default function SkillsMenu() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(fakeReviews);
  }, []);

  return (
    <Grid container spacing={3} direction="row">        
      {reviews.map(review => (
        <Grid item key={review.title}>
          <ReviewItem review={review} />
        </Grid>
      ))}
    </Grid>
  );
}
