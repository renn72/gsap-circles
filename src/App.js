import { useState, useEffect, useRef } from 'react'

import { Tween, Power3 } from 'gsap/gsap-core'
import { gsap } from 'gsap'

import './App.css'

function App() {
  let app = useRef(null)
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)
  const [state, setState] = useState(false)

  const handleExpand = (e) => {
    gsap.to(e, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
      duration: 0.8,
    })
    setState(true)
  }

  const handleShrink = (e) => {
    gsap.to(e, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
      duration: 0.8,
    })
    setState(false)
  }

  useEffect(() => {
    gsap.to(app, { duration: 0, css: { visibility: 'visible' } })
    // gsap.from(circle, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   duration: 0.8,
    // })
    // gsap.from(circleRed, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   duration: 0.8,
    //   delay: 0.2,
    // })
    // gsap.from(circleBlue, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   duration: 0.8,
    //   delay: 0.4,
    // })

    gsap.from([circle, circleRed, circleBlue], {
      // ref, or a className
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      duration: 0.8,
      stagger: {
        amount: 0.8,
      },
    })
  }, [])

  return (
    <div ref={(el) => (app = el)} className='App'>
      <header className='App-header'>
        <div className='circle-container'>
          <div
            ref={(el) => (circle = el)}
            onClick={(e) =>
              state ? handleShrink(e.target) : handleExpand(e.target)
            }
            className='circle'
          ></div>
          <div ref={(el) => (circleRed = el)} className='circle red'></div>
          <div ref={(el) => (circleBlue = el)} className='circle blue'></div>
        </div>
      </header>
    </div>
  )
}

export default App
