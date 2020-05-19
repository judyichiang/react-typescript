import React from 'react';

const Message = (prop: {message: string}): any => {
  return(
  <p> {prop.message}</p>
  )
}

// function Message() {
//     return(
//     <p> This is a quick message</p>)
// }

export default Message;
