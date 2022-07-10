import React, { Component } from 'react'
import { CardItemType } from './types';
import CardItem from './CardItem';
import './style.scss'

interface IProps {
    cardData: CardItemType[];
    onChange?: (selectedId: string) => void
}
interface IStates { }

export default class CardTabs extends Component<IProps, IStates> {
    handleChange = (selectedId: string) => {
        const { onChange } = this.props
        if (onChange) {
            onChange(selectedId)
        }
    }
    render() {
        const { cardData } = this.props
        return (
            <div className='cardtabs-component-box'>
                {
                    cardData.map((cardItem, index) => (
                        <CardItem
                            name={cardItem.name}
                            value={cardItem.value}
                            percent={cardItem.percent}
                            icon={cardItem.icon}
                            iconSelected={cardItem.iconSelected}
                            isSelected={cardItem.isSelected}
                            id={cardItem.id}
                            onClick={(selectedId: string) => { this.handleChange(selectedId) }}
                            key={`cardItem${index.toString()}`}
                        ></CardItem>
                    ))
                }
            </div>
        )
    }
}
