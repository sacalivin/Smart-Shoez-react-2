import React from 'react'
import Slider from '../../components/slider/slider.component'
import Heading from '../../components/heading/heading.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import './homepage.styles.scss'

const Homepage = () => {
    return (
        <div className='home-page'>
            <Slider />
            <Heading />
            <CollectionOverview />
            <div className="moreProd">
            </div>
        </div>
    )
}

export default Homepage