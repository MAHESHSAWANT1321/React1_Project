//?Conditional Rendering using Logical OR or Short circuit Evalution



import React from "react";
function ConditionalRenderingDemo3() {
    const unreadMessages = ['Hello','Hi','Good Evening'];
    return(
        <div>
            <h4>Hello... Mahesh</h4>
            {unreadMessages.length > 0 && (<h2>{unreadMessages.length} unread messages.</h2>)} 
        </div>
    )

}
export default ConditionalRenderingDemo3;




