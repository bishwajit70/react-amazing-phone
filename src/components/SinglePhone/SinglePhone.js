import React from 'react';
import './SinglePhone.css'

const SinglePhone = (props) => {
    // console.log(props.phone)
    // const phone=props;
    // console.log(props.brand)
    return (
        <div className='card single-phone p-3 my-3' >
            <img className='pb-4' src={props.image} alt="" />
            <h2 className='text-start'>{props.brand}</h2>
            <h4 className='text-start'>{props.name}</h4>
        </div>



    );



};

export default SinglePhone;