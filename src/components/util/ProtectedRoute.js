import React from 'react'
import {Navigate} from 'react-router-dom'

export default function ProtectedRoute({children}) {
    const role='student';
    if(role==='student'){
        alert('You are not allowed to go to this Rutere...')
        return<Navigate to='/home' replace/>
    }
  return children;
}
