import React from 'react'

 function MemoDemo2({name}) {
  return (
    <>
      {console.log('MemoDemo2 - render...')};
      <h4>MemoDemo2 - is a Child Component</h4>
      <h6>Name from my parent is:{name}</h6>
    </>
  )
}
// export default MemoDemo2;
export default React.memo(MemoDemo2);//
/*
!React.memo():
-In this line we will make it memo Component.
-If props and state is change then and then only we render child component.
*/