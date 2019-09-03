import React from 'react'
import MarketListItem from '../market-list-item'
import Mobile from '../img/mobile.png'
import Watches from '../img/watch.png'
import Laptop from '../img/laptop.png'
import HeadPhone from '../img/headphone.png'
import Else from '../img/powerbank.png'





import './market-list.css'

export default class MarketList extends React.Component {

        constructor(props) {
            super(props);
            
            this.state = {
                arr:
                [
                    [Mobile, 512, 'mobilePhone'],
                    [Laptop, 1512, 'LaPro'],
                    [Watches, 12, 'Cassio'],
                    [HeadPhone, 112, 'Airpods'],
                    [Else, 100, 'Powerbank']
                ],
                opacity: 1
            }
        }

        render () {

        return (
            <div className="marketList">
                <div className = "mobilePhone">
                    <MarketListItem items = {this.state.arr[0]}/> 
                </div>
                <div className = "laptop">
                    <MarketListItem items = {this.state.arr[1]}/> 
                </div>
                <div className = "wathes">
                    <MarketListItem items = {this.state.arr[2]}/>
                </div>
                <div className = "headphone">
                    <MarketListItem items = {this.state.arr[3]}/> 
                </div>
                <div className = "anouther">
                    <MarketListItem items = {this.state.arr[4]}/> 
                </div>
            </div>
        )
    }
}
