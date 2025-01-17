import React from 'react';



const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'blue', 'magenta', 'green', 'yellow']

    const randColor = colours[Math.floor(Math.random() * 5)]

    const className = randColor + '-text'

    return (props) => {
        return(
            <div className={className}>
             <WrappedComponent {...props}/>
            </div>
        )
    }
   
  
}
 
export default Rainbow;