import React from 'react'

export function Alert({text}) {
  return (
    <div className="alert alert-warning" role="alert">
      {text}
    </div>
  )
}
