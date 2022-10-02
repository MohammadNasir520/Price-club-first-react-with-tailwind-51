import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center '>
        <CheckBadgeIcon className="h-4 w-4 text-green-600 "/>
        <p className='ml-2'>{feature}</p>
        </div>
    );
};

export default Feature;