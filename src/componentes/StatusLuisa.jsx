import React, { useState } from 'react'

export const StatusLuisa = () => {
    const [puntos, setPuntos] = useState(' ');
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