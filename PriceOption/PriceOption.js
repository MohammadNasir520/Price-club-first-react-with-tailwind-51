import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features}=option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3>
                    <span className='text-6xl text-white font-bold'>{option.price}</span>
                    <span className='text-gray-200'>/mon</span>
                
                </h3>
                <p  className='text-3xl my-3'>{option.name}</p>
            </div>
            {
                features.map((feature,idx)=><Feature 
                key={idx}
                feature={feature}
                
                ></Feature>)
            }
            <button className='bg-green-500  mt-2 py-2 w-full rounded-md  '>Buy Now</button>
        </div>
    );
};

export default PriceOption;