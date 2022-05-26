import React from 'react'
import ComingSoon from './coming-soon.gif'

const GalleryImages = () => {
    return (
        <div style={{ background: 'black' }}>
            <div className="coming-soon">
                <img style={{width: '100%'}} src={ComingSoon} alt="coming soon" />
            </div>
        </div>
    )
}

export default GalleryImages