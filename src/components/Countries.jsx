import React from 'react'

const Countries = ({country}) => {

        console.log(country)

  return (
    <article className='Card'>
            <img className='Card_img' src={country.flags.svg}alt={country.flags.alt} />
            <h2 className='Card_name'>{country.name.common} </h2>
            <ul className='Card_cities'>
                <li className='Card_list'>Capital: <b className='Card_item'>{country.capital?.[0]}</b></li>
                <li className='Card_list'>Population: <b className='Card_item'>{country.population}</b></li>
            </ul>
    </article>
  )
}

export default Countries