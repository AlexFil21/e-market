import React from 'react'
import CloseBtn from '../img/close.png'

import './popup.css'

export default class  PopUp extends React.Component {

    render () {
        console.log(this.props.item.price);
        
        return (
            <div className="popup">
                <div className="popup-item">
                    <div className = "item-header">
                        <div><span>{this.props.item.name}</span></div>
                        <div><img src={CloseBtn} onClick ={this.props.ClosePopUp} /></div>
                    </div>
                    <div className="item-content">
                        <div className="item-content-img">
                            <img src={this.props.item.img} />
                        </div>

                        <div className="item-content-description">
                        <form>
                            <p>
                                <label> Количество 
                                    <select size="1"  name="количество">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </label>     
                                <label> Цвет   
                                    <select size="1"  name="цвет">
                                        <option>Cиний</option>
                                        <option>Черный</option>
                                        <option>Белый</option>
                                    </select>
                                </label>     
                            </p>
                            <p >
                                <span className="item-content-description-submit">
                                    ${this.props.item.price}
                                </span>
                                <input type="submit" value="Купить" />
                            </p>
                                <a href=""> Посмотреть в магазине</a>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="popup-bg"></div>
            </div>
        )
    }
}
