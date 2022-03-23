import React from 'react';

const SinglePhone = (props) => {
    // console.log(props.phone)
    // const phone=props;
    // console.log(props.brand)
    return (
        <div>
            <img src={props.image} alt="" />
            <h2>{props.brand}</h2>
            <h4>{props.name}</h4>
        </div>
    );



};

export default SinglePhone;