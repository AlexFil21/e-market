import React from 'react'
import MarketList from '../market-list'
import Header from '../header'


import './app.css'

export default class App extends React.Component {

    render () {
        return (
            <div className="container">
                <Header />
                <MarketList />
            </div>
        )
    }
}