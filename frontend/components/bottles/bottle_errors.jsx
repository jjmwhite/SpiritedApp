import React from 'react';

const BottleErrors = ({ errors }) => {

  const allErrors = errors.map((err, idx) => {
    return <li key={idx} className="bottle-error">{err}</li>
  })

  return (
    <ul>
      {allErrors}
    </ul>
  )
}

export default BottleErrors