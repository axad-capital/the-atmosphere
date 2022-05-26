import React, { useState } from 'react'
import Clip3 from './clip3.mp4'
import Clip4 from './clip4.mp4'
import Clip5 from './clip5.mp4'
import './galleryComp.css'
import { useLocation } from 'react-router-dom';


const GalleryComp = () => {

  const location = useLocation()

  const [playPause, setPlayPause] = useState('Pause')
  const [mute, setMute] = useState('Mute')
  const [currentVid, setCurrentVid] = useState(Math.floor(Math.random() * 3))

  if (location.pathname === '/gallery') {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }

  function handleMute() {
    let clip = document.getElementById('videoClip')
    if (clip.muted) {
      clip.muted = false
      setMute('Mute')
    } else {
      clip.muted = true
      setMute('Unmute')
    }
  }

  function handlePause() {
    let clip = document.getElementById('videoClip')
    if (clip.paused) {
      clip.play()
      setPlayPause('Pause')
    } else {
      clip.pause()
      setPlayPause('Play')
    }
  }

  return (
    <div style={{ background: "black", padding: '30px', minHeight: '80vh' }} className='gallery-container'>

      <h3 className='image-link' onClick={() => window.location.href = '/gallery/images'}>Image Gallery</h3>

      {currentVid === 0 ? <video onClick={handlePause} muted id='videoClip' autoPlay loop width='100%' type='video/mp4' src={Clip3} /> : currentVid === 1 ? <video onClick={handlePause} muted id='videoClip' autoPlay loop width='100%' type='video/mp4' src={Clip4} /> : <video onClick={handlePause} muted id='videoClip' autoPlay loop width='100%' type='video/mp4' src={Clip5} />}
      <button className='mutePlay' onClick={handleMute}>{mute}</button>
      <button className='mutePlay' onClick={handlePause}>{playPause}</button>
    </div>
  )
}

export default GalleryComp