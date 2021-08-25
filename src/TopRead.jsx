import React, { Component } from 'react'
import Reviews from './TopRead/Reviews'
import AverageRating from './TopRead/AverageRating'
import SentimentAnalysis from './TopRead/SentimentAnalysis'

export default class TopRead extends Component {
    render() {
        return (
            <div className='TopRead'>
                <Reviews/>
                <AverageRating/>
                <SentimentAnalysis/>
            </div>
        )
    }
}
