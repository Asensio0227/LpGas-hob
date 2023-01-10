import React from 'react'
import loadingGIf from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className='loading'>
      <h4>gallery data loading...</h4>
      <img src={loadingGIf} alt={loadingGIf} />
    </div>
  )
}

export default Loading