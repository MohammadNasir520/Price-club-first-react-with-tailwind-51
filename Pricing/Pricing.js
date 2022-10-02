import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions=[
        {id: 1, name:'free' , price: 0, features:[
            'Awesome feature ',
            'extra feature',
            'unnecessary feature',
            'wile never use feature',
            'hudai feature',
            'ajaira feature'
        ]
    }, 

        {id: 2, name:'medium' , price: 9.99, features:[
            'Awesome feature ',
            'extra feature',
            'unnecessary feature',
            'wile never use feature',
            'hudai feature',
            'ajaira feature'
        ]}, 
        {id: 3, name:'premium' , price: 19.99, features:[
            'Awesome feature ',
            'extra feature',
            'unnecessary feature',
            'wile never use feature',
            'hudai feature',
            'ajaira feature'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>best Deal of the town </h2>
            <div className='grid md:grid-cols-3 mt-4'>
                {
                    pricingOptions.map(option=><PriceOption 
                    key={option.id}
                    option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;