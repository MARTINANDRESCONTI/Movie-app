import React from 'react'

export default function MovieDetail({params}) {
  console.log(params)
  return (
    <div>{params.detail}</div>
  )
}
