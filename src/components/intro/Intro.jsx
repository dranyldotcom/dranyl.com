import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Software Development Engineer',
        'Software Engineer',
        'IT Specialist',
        'Support Analyst',
        'Senior Java Developer',
      ],
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/IMG_profile4.JPG' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Welcome, I'm</h2>
          <h1>Lynard Salingujay</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='down' />
        </a>
      </div>
    </div>
  )
}
