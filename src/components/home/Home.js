import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'

export default function Home() {
  const naviget = useNavigate();
  const goToList =() =>{
    alert('Go to List Component...')
    naviget('/List')
  }
  return <>
    <h1 className='text-center'>This is Home components</h1>
    <p> 
      <a href='List'>Go to List</a>
      But here is  whole page is Loaded, not good way
    </p><br/> <br/>

<button>
  <Link to='/List'>Go to List</Link>
</button><br/><br/>

<button onClick={goToList}> Do Samething</button><br/><br/>
<button onClick={()=>{naviget(1)}}>Go to Next</button><br/><br/>
<button onClick={()=>naviget(-1)}>Go to Back</button>
  </>
}
