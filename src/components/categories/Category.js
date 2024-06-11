import React from 'react'

export default function Category(props) {
  const {img_src,name} = props.category;//De-sturcturing.
  return (
    <div className='text-center category'>
        <img src={img_src} alt='abc'/>
        <div>
            <span>{name}</span>
        </div>
    </div>
  )
}
