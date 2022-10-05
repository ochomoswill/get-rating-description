const ratingScores = [
  {
    publication_rating_score_id: 4,
    publication_rating_scale_id: 1,
    rating_score_id: 1,
    rating_score: 1,
    rating_color_code: '#f8696b',
    rating_description: 'Unsatisfactory',
    percentage_rating: 55.0,
    information: 'Does Not Meet Targets.',
    date_created: '2022-09-27 20:16:29',
    date_modified: '2022-09-27 20:16:29',
  },
  {
    publication_rating_score_id: 1,
    publication_rating_scale_id: 1,
    rating_score_id: 2,
    rating_score: 2,
    rating_color_code: '#faab77',
    rating_description: 'Development is required',
    percentage_rating: 65.0,
    information:
      'Performance does not consistently meet all standards. Development is required.',
    date_created: '2022-09-27 20:16:29',
    date_modified: '2022-09-27 20:16:29',
  },
  {
    publication_rating_score_id: 2,
    publication_rating_scale_id: 1,
    rating_score_id: 3,
    rating_score: 3,
    rating_color_code: '#ffea85',
    rating_description: 'Improvement needed',
    percentage_rating: 75.0,
    information: 'Partially meets Targets. Watch out, coach and mentor.',
    date_created: '2022-09-27 20:16:29',
    date_modified: '2022-09-27 20:16:29',
  },
  {
    publication_rating_score_id: 3,
    publication_rating_scale_id: 1,
    rating_score_id: 4,
    rating_score: 4,
    rating_color_code: '#b1d481',
    rating_description: 'Meets all standards',
    percentage_rating: 85.0,
    information: 'Performance consistently meets all standards.',
    date_created: '2022-09-27 20:16:29',
    date_modified: '2022-09-27 20:16:29',
  },
  {
    publication_rating_score_id: 5,
    publication_rating_scale_id: 1,
    rating_score_id: 5,
    rating_score: 5,
    rating_color_code: '#63be7b',
    rating_description: 'Very good performance.',
    percentage_rating: 100.0,
    information: 'Very good performance - exceeds most targets.',
    date_created: '2022-09-27 20:16:29',
    date_modified: '2022-09-27 20:16:29',
  },
];

export const getRatingDescription = (score: number) => {
  let description = '';

  ratingScores.map((ratingScore, ratingScoreIndex) => {
    if (ratingScoreIndex === 0) {
      if (score > 0 && score <= ratingScore.percentage_rating) {
        description = ratingScore.rating_description;
      }
    }

    if (ratingScoreIndex > 0) {
      if (
        score > ratingScores[ratingScoreIndex - 1].percentage_rating &&
        score <= ratingScore.percentage_rating
      ) {
        description = ratingScore.rating_description;
      }
    }
  });

  return description;
};
