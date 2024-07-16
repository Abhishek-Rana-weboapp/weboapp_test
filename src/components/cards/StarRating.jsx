import React from 'react'

const StarRating = ({rating, size}) => {
    const fiveStar = [1,2,3,4,5]
  return (
    <div>
      {fiveStar.map((star) => {
        return (  
          <span
          key={star}
            className='start'
            style={{
              cursor: 'pointer',
              color: rating >= star ? 'gold' : 'gray',
              fontSize: `${size ? size : "30px"}`,
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
  )
}

export default StarRating
