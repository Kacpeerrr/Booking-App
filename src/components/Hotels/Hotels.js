//pobieramy React i Component do komponent klasowego
import React, { Component } from 'react'
import Hotel from './Hotel/Hotel'

class Hotels extends Component {
    render() {
        return(
            <div>
                <p>Hotels</p>
                <Hotel/>
            </div>
        )
    }
}

export default Hotels