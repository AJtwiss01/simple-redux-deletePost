import React from 'react';
import Rainbow from '../hoc/Rainbow'


const About = (props) => {
    console.log('this a list of props', props)
    return (  

        <div className="container">
            <h2 className="center red-text"> About </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa fugiat, qui nemo maxime inventore quod nisi quis tenetur autem a perferendis debitis, cupiditate facere obcaecati magni dignissimos, assumenda molestias.</p>
        </div>
    );
}
 
export default Rainbow(About);