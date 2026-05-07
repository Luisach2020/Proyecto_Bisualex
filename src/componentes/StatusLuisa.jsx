import React, { useState } from 'react'

export const StatusLuisa = () => {
    const [puntos, setPuntos] = useState(' ');




     const getCharacters= async()=>{
        const res= await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        console.log( data )

          useEffect(() => {

   getCharacters()

    }, [])

    }
    <>
        <div className='puntos'>
         <button onClick={() => { setPuntos ( (prev) => {prev + 2} )}}>Puntos</button>
           <button onClick={() => { setPuntos ( (prev) => {prev + 2} )}}>100 *emoji*</button>
           <button onClick={() => { setPuntos ( (prev) => {prev + 2} )}}>200 🤗</button>
        <button onClick={() => { setPuntos ( (prev) => {prev + 2} )}}>200 ☺️​😂</button>
    


        </div>


    </>
    return (

 <div>StatusLuisa</div>

    )
}