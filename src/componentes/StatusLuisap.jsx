import React, { useEffect, useState } from 'react'

export const StatusLuisap = () => {
    const [gemas, Setgemas] = useState(0);

    const getCharacter = async() => {
        const res = await fetch("")
        const data = await res.json()

        console.log(data)
    }
    useEffect(() => {
    getCharacter() 
    
    }, [])


     return (

    <>
        <div>StatusLuisap</div>
        <div className='gemas'>
            <h1>Gemas: { gemas}</h1>
          <button onClick={() => { Setgemas ((prev) => prev + 10)}}>Gemas moradas</button>
          <button onClick={() => { Setgemas ((prev) => prev + 30)}}>Gemas azules</button>
          <button onClick={() => { Setgemas ((prev) => prev + 20)}}>Gemas amarrilas</button>
          <button onClick={() => { Setgemas ((prev) => prev + 40)}}>Gemas rojas</button>
           

        </div>


    </>

    )
}