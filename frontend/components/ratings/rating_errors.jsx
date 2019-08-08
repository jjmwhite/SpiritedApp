import React from 'react';

const RatingErrors = ({ errors }) => {

  const allErrors = errors.map((err, idx) => {
    if (err === 'User has already been taken') {
      err = 'Please update your existing review'
    }
    return <li key={`rating-err-${idx}`} className="rating-error">{err}</li>
  })

  return (
    <ul>
      {allErrors}
    </ul>
  )
}

export default RatingErrors