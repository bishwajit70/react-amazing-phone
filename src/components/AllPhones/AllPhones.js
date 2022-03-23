import './AllPhones.css'
import React from 'react';
import SinglePhone from '../SinglePhone/SinglePhone';

const AllPhones = (props) => {
    // console.log(props.image)
    // const phone = props.phone
    // const phone = props.phone
    // console.log(phone)
    // const {brand} = props.phone;
    // console.log(brand)
    return (

        <div className='col-md-3 g-4 rounded'>
            <SinglePhone  
            brand={props.brand} 
            image={props.image} 
            name={props.name}
            ></SinglePhone>
        </div>
    );
};

export default AllPhones;