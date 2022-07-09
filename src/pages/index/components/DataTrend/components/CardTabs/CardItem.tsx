import React, { Component } from 'react'
import { CardItemType } from './types'
import './style.scss'

interface IProps extends CardItemType {
    onClick?: (id: string) => void,
}
interface IStates { }

export default class CardItem extends Component<IProps, IStates>{
    state = {}
    handleClick = (id: string) => {
        const { onClick } = this.props
        if (onClick) {
            onClick(id)
        }
    }
    render() {
        const { name, value, percent, icon, iconSelected, id, isSelected } = this.props
        const cardItemStyle = isSelected ? "carditem-component-box carditem-selected" : "carditem-component-box"
        const nameTextStyle = isSelected ? 'name-active' : 'percent'
        const percentTextStyle = isSelected ? 'percent-active' : 'percent'
        const valueTextStyle = isSelected ? 'value-active' : 'value'
        const iconPath = isSelected ? iconSelected : icon
        return (
            <div className={cardItemStyle} onClick={() => { this.handleClick(id) }}>
                <img src={iconPath} className='icon' alt='' />
                <div className="info">
                    <div className="name-percent">
                        <div className={nameTextStyle}>{name}</div>
                        <div className={percentTextStyle}>{`${percent} %`}</div>
                    </div>
                    <div className={valueTextStyle}>{value}</div>
                </div>
            </div>
        )
    }
}
