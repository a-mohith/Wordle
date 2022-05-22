import React from 'react'

export default function Keyboard({handleClick}) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Backspace','Submit']
    return (
        <div className="keyboard">
            {
                letters.map(letter => (
                    <div onClick={()=>{handleClick(letter)}} className='keyboard_letter' key={letter}>{letter}</div>
                )
                )
            }
        </div>
    )
}