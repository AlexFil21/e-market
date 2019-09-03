import React from 'react'
import PopUp from '../popup'

import './market-list-item.css'

export default class MarketListItem extends React.Component {
    
    constructor (props) {
        super(props)

        this.state = {
            click: false,
            arr: {}
        }

        this.ClosePopUp = this.ClosePopUp.bind(this) 
    }
  
    CreateArr () {
        const electronicArr = [];

        for (let i=0; i<4; i++) {
            let item = {
                img: this.props.items[0],
                price: this.props.items[1] + i,
                name: this.props.items[2]
            } 
            electronicArr.push(item);
        }
        return this.ItemsArr (electronicArr)
    }

    ItemsArr (electronicArr) {
        const elements = electronicArr.map(item => {
            return <li  className="electronicItem" 
                        id ={item.price}>
    
                        <img src={item.img} />
                        <p>{item.name}</p>
                        <span>${item.price}</span>
                        <button onClick = {(e) => this.ChangeItem(e, item)}>
                                Купить
                        </button>
                    </li>
        }) 
        return elements
    }
   

    MouseEnter (e) {
        const   li = e.target.tagName.toLowerCase(),
                liChildren = e.target.parentNode.tagName.toLowerCase()
        if (li == 'li') {
            e.target.children[3].style.opacity = "1";
            e.target.children[3].style.transition = "0.2s ease-in";
        } else if (liChildren == "li") {
            e.target.parentNode.children[3].style.opacity = "1";
            e.target.parentNode.children[3].style.transition = "0.2s ease-in";
        }
    }

    MouseLeave (e) {
        const   li = e.target.tagName.toLowerCase(),
                liChildren = e.target.parentNode.tagName.toLowerCase()
        if (li == 'li') {
              e.target.children[3].style.opacity = "0";
        } else if (liChildren == "li") {
            e.target.parentNode.children[3].style.opacity = "0";
        }
    }

    ChangeItem (e, item) {
        const newArr = { 
                    img: item.img,
                    price: item.price,
                    name: item.name
                }
        this.setState ({
                    arr: newArr,
                    click: true    
                })
    }

    ShowPopUp () {
        if(this.state.click) {
            return <PopUp item = {this.state.arr} ClosePopUp = {this.ClosePopUp}/>
        }
    }

    ClosePopUp () {
        this.setState ({click: false})
    }

        render () {

            return (
                <div className='market-list-items'
                     onMouseOver = {(e) => this.MouseEnter(e)}
                     onMouseOut = {(e) => this.MouseLeave(e)}>
                    <ul >
                        {this.CreateArr()}
                    </ul>
                        {this.ShowPopUp()}
                </div>
            )
        }
    }

