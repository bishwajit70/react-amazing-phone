import './SearchPhone.css'
import React, { useState, useRef, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import AllPhones from '../AllPhones/AllPhones';
const SearchPhone = () => {
    const [value, setValue] = useState('  ')
    const [phones, setPhones] = useState([])
    const inputRef = useRef();

    const submitHandler = () => {
        setValue(inputRef.current.value);
    }
    // const newValue = value + " "
    // console.log(newValue)
    useEffect(() => {
        // console.log(value);
        const url = `https://openapi.programming-hero.com/api/phones?search=${value}`
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        fetch(url)
            .then(res => res.json())
            .then(data => setPhones(data.data))
    }, [value])
    // console.log(value);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-sm-12 mx-auto'>
                    <InputGroup className="mb-3">
                        <FormControl
                            ref={inputRef}
                            placeholder="Enter Your Phone Name"
                            aria-label="Enter Your Phone Name"
                            aria-describedby="basic-addon2"
                        />
                        <Button
                            onClick={() => submitHandler()}
                            variant="primary"
                            id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>
                <div>
                    {
                        phones.map(phone => <AllPhones 
                            brand={phone.brand} 
                            image={phone.image} 
                            name={phone.phone_name} 
                            key={phone.slug}
                            ></AllPhones>)
                    }
                </div>
            </div>
        </div>

    );

};

export default SearchPhone;