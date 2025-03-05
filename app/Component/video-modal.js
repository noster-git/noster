import React from 'react'
import CloseBtn from './close-btn'

const VideoModal = ({ videoLink, closeModal, modalVidRef }) => {
  return (
    <div className='video-modal-layer-A'>
        <div className='video-modal-layer-B'>
            <div className='video-modal-video-container'>
                <video ref={modalVidRef} controls autoPlay muted="true" loop="true" preload="metadata" playsInline="true" loading="lazy">
                    <source src={videoLink} type="video/mp4" />
                </video>
            </div>
            <div onClick={closeModal} className='close-vid'>
                <div>
                    <CloseBtn />
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoModal
