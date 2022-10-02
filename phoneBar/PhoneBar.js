import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import { data } from 'autoprefixer';

const PhoneBar = () => {
    const [phones, setPhones]=useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>{})

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phonesLoaded=data.data.data;                   //this phonesLoded gives us a array of phonedata
            const phoneData=phonesLoaded.map(phone=>{                 // here we get individual phone data as object
                             const parts= phone.slug.split('-');         // processing part   //data process korar jonno phoner moddhe je slug ase setake - diye spilit kora hoice . shudhu number paoar jonno.     
                             const price=parseInt(parts[1]);              // processing part  // index 1 diye porer number take price baniye deya  hoyes. emnitei sudhu dekhanor jonno. string theke number bananor jonno pars int korahoise
                             const singlePhone={                            // ekhane ekta object declare kore uporer processing part take er vitore return kora hoice.
                                             name: phone.phone_name,  //name hisebe phone er moddher nam set kora hoise
                                             price: price           // price hisebe uporer processing datar price set kora hoise
                                     }
                                    return singlePhone;              // return kora hoise single phone jeno phoneData er moddhe single phone object tai dekha jabe baki gulo dekha jabe na karon return kora hoinai.
            
                     } )
            console.log(phoneData)
            setPhones(phoneData)
        })
    },[])
    return (
        <BarChart
        width={500}
        height={300}
        data={phones}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
        <Bar dataKey="" fill="#82ca9d" />
      </BarChart>
    );
};

export default PhoneBar;