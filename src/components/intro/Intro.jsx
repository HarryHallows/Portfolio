import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => 
    {
        init(textRef.current, 
        { showCursor: true, 
            backDelay: 2500,
            strings: ['Game Developer.', 'Problem Solver.', 'Creative.', 'Bonsai Lover.', 'Game Enthusiast.' ] 
        })

    }, [])

    return (
        <div className ="intro" id="intro" alt="The intro section of the webpage also known as the hero section">
            
            <div className="left">
                <div className="imgContainer">
                    <img src="/Portfolio/assets/me.png" alt="profile of myself" />
                </div>
            </div>
            
            <div className="right">
                <div className="wrapper">
                    <h2 alt="greeting">Hi There, I'm</h2>
                    <h1 alt="My name">Harry Hallows</h1>
                    <h3 alt="An updating title that states different specialties">I'm a <span ref={textRef}></span></h3>

                    <a href="#about">
                        <img src="/Portfolio/assets/arrow.svg" alt="arrow Icon by freeicons on freeicons.io" />
                    </a>
                </div>
            </div>
        </div>
    )
}
