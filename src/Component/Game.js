import React, { useEffect, useRef, useState } from 'react'
import Keyboard from './Keyboard'
import items from './words_list'

export default function Game({ reloadGame }) {
    const [gameStarted, setGameStarted] = useState(false)
    const [word, setWord] = useState("")
    const [letters, setLetters] = useState([[], [], [], [], [], []])
    const [tries, setTries] = useState(0)



    const startGame = () => {
        setGameStarted(true)
        setWord(items[Math.floor(Math.random() * items.length)])
    }
    const checkWinning = () => {
        console.log(letters, word.split(""))
        if (JSON.stringify(letters[tries]) == JSON.stringify(word.split(""))) {
            
            alert("Congrats you won!!!")
            reloadGame()
        }
        else if (tries == 5) {
            console.log(word)
            alert("Word Was: " + word)
            reloadGame()
        }
    }
    const handleKeyPress = (e) => {
        if (letters[tries].length == word.length) {
            if (e == "Submit") {
                setTries(tries + 1)
                checkWinning()
                console.log("one done")
            }
            return
        }
        if (e.length == 1) {
            letters[tries].push(e);
            setLetters([...letters])
        }
        else if (e == "Backspace") {
            letters.pop()
            setLetters(letters => [...letters])
        }
    }
    const getColor = (index_word, index) => {
        
        if (index_word < tries) {
            
            if (letters[index_word][index] == word[index]) {
                return "green"
            }
            else if (word.split("").includes(letters[index_word][index])) {
                return "yellow"
            }
            else {
                return "grey"
            }
        }
    }
    console.log(word, letters)



    if (gameStarted)
        return (
            <div>
                <div>
                    {
                        letters.map((x, index_word) => (

                            <div className="word" key={index_word + "Word"}>
                                {
                                    word.split("").map((letter, index) => (
                                        <div key={letter + index} className='letter' style={{ backgroundColor: getColor(index_word, index) }}>
                                            {letters[index_word][index]}
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        )
                        )
                    }
                </div>
                <div>
                    <Keyboard handleClick={handleKeyPress} />
                </div>
            </div>
        )
    else
        return (
            <button onClick={startGame} className="start">Start</button>
        )
}
