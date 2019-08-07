import React from 'react';

const RatingErrors = ({ errors }) => {

  const allErrors = errors.map((err, idx) => {
    return <li key={`rating-err-${idx}`} className="rating-error">{err}</li>
  })

  return (
    <ul>
      {allErrors}
    </ul>
  )
}

export default RatingErrors