import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country);
    const {name, population, area, region, flags} = props.country
    return (
        <div className='country'>
            {/* <h2>Country Name: {props.country.name.common}</h2> */}
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            {/* <p>Population: {props.country.population}</p> */}
            <p>Population: {population}</p>
            {/* <p><small>Area: {props.country.area}</small></p> */}
            <p><small>Area: {area}</small></p>
            {/* <p><small>Region: {props.country.region}</small></p> */}
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;