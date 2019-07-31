import React from 'react';

const SessionErrors = ({ errors }) => {

  const allErrors = errors.map( (err, idx) => {
    return <li key={idx} className="session-error">{err}</li>
  })

  return (
    <ul>
      {allErrors}
    </ul>
  )
}

export default SessionErrors