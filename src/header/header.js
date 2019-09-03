import React from 'react'

import './header.css'

export default class  Header extends React.Component  {
    
    state = {
        mobilePhone: false,
        laptop: false,
        wathes: false,
        headphone: false,
        anouther: false
    }

    ChangeContent (item = '', hide = '') {
        let content = document.getElementsByClassName('marketList'),
            childrens = content[0].children,
            count = 0;
        
        for (let i=0; i<childrens.length; i++) {
            childrens[i].style.display = 'none';
        }


        for (let i in this.state){
            if(i == item) {
                document.getElementsByClassName(i)[0].style.display = "block";
            }else if(this.state[i]) {
                document.getElementsByClassName(i)[0].style.display = "block";
            }
        }

        if (hide == 'close') {
            document.getElementsByClassName(item)[0].style.display = "none"
        }
        
        for (let i=0; i<childrens.length; i++) {
            if(childrens[i].style.display == 'none') count++;
            if (count == 5 ) {
                for (let i=0; i<childrens.length; i++) {
                    childrens[i].style.display = 'block';
                }
            }
        }
        
        
    }


    handleChange (e) {
        const   elementClassName = e.target.parentNode.parentNode.className,
                testingElem = elementClassName.slice(7);
          
            if (e.target.checked) {
                this.setState({[testingElem]: true});
                this.ChangeContent(testingElem);
            } else if (!e.target.checked){
                this.setState({[testingElem]: false});
                this.ChangeContent(testingElem, 'close');
            }
    }

    render () {
        return (
            <div className="header">
                <ul onChange = {(e) => this.handleChange(e)}>
                <li className = "header-mobilePhone">
                    <label className="wrap">
                        <input type="checkbox"  name="radio" />
                        <span className="checkmark">
                            <span></span>
                        </span>
                    </label>
                    Смартфоны
                </li>
                <li className = "header-laptop">
                    <label className="wrap">
                        <input type="checkbox"  name="radio" />
                        <span className="checkmark">
                            <span></span>
                        </span>
                    </label>
                    Планшеты/Ноутбуки
                </li>
                <li className = "header-wathes">
                    <label className="wrap">
                        <input type="checkbox"  name="radio" />
                        <span className="checkmark">
                            <span></span>
                        </span>
                    </label>
                    Часы
                </li>
                <li className = "header-headphone">
                    <label className="wrap">
                        <input type="checkbox"  name="radio" />
                        <span className="checkmark">
                            <span></span>
                        </span>
                    </label>
                    Аксессуары
                </li>
                <li className = "header-anouther">
                    <label className="wrap">
                        <input type="checkbox"  name="radio" />
                        <span className="checkmark">
                            <span></span>
                        </span>
                    </label>
                    Другое
                </li>
                </ul>
            </div>
        )
    }
}

