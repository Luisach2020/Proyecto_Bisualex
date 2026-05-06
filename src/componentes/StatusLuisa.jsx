import React, { useState } from 'react'

export const StatusLuisa = () => {
    const [puntos, setPuntos] = useState(' ');
    <>
        <div className='puntos'>
         <button onClick={() => { setPuntos ( (prev) => {prev + 2} )}}>Puntos</button>
            <button>100 *emoji*</button>
            <button>200 🤗</button>
            <button>200 ☺️​😂</button>


        </div>


    </>
    return (

 <div>StatusLuisa</div>

    )
}