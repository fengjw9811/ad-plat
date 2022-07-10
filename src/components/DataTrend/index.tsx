import React, { Component } from 'react'
import CardTabs from './components/CardTabs'
import LineChart from './components/LineChart'
import { CardItemType } from './components/CardTabs/types'
import { cloneDeep } from 'lodash'
//引入图片
import icon1Selected from '../../assets/imgs/card-icon1-selected.png'
import icon1 from '../../assets/imgs/card-icon1.png'
import icon2Selected from '../../assets/imgs/card-icon2-selected.png'
import icon2 from '../../assets/imgs/card-icon2.png'
import icon3Selected from '../../assets/imgs/card-icon3-selected.png'
import icon3 from '../../assets/imgs/card-icon3.png'

import './style.scss'

interface IProps {
    cardData?: CardItemType[]
}

interface IStates { }

const defaultCardData = [
    {
        id: '1',
        name: '消费（元）',
        value: 2000,
        percent: '',
        icon: icon1,
        iconSelected: icon1Selected,
        isSelected: true,
    },
    {
        id: '2',
        name: '展现（次）',
        value: 5988,
        percent: 88.9,
        icon: icon2,
        iconSelected: icon2Selected,
        isSelected: false
    },
    {
        id: '3',
        name: '点击（次）',
        value: 199,
        percent: 12.6,
        icon: icon3,
        iconSelected: icon3Selected,
        isSelected: false,
    }
]

export default class Chart extends Component<IProps, IStates> {
    state = {
        cardData: this.props.cardData || defaultCardData,
        chartData: [
            {
                year: '2011',
                value: 3
            },
            {
                year: '2012',
                value: 4
            },
            {
                year: '2013',
                value: 3.5
            },
            {
                year: '2014',
                value: 5
            },
            {
                year: '2015',
                value: 4.9
            },
            {
                year: '2016',
                value: 6
            },
            {
                year: '2017',
                value: 7
            },
            {
                year: '2018',
                value: 9
            },
            {
                year: '2019',
                value: 13
            }
        ]
    }
    handleCardTabsChange = (selectedId: string) => {
        const { cardData, chartData } = this.state
        const newCardData = cardData.map((cardItem: CardItemType) => {
            const tempCardItem = cloneDeep(cardItem)
            if (tempCardItem.id === selectedId) {
                tempCardItem.isSelected = true
            } else {
                tempCardItem.isSelected = false
            }
            return tempCardItem
        })
        const newChartData = chartData.map((chartItem) => {
            const tempChartItem = cloneDeep(chartItem)
            tempChartItem.value += 2
            return tempChartItem
        })
        this.setState({
            cardData: newCardData,
            chartData: newChartData
        })
    }
    handleDateChange = () => {

    }
    render() {
        const { cardData, chartData } = this.state
        return (
            <div className='data-trend-component-box'>
                <div className='card-tabs-box'>
                    <CardTabs
                        cardData={cardData}
                        onChange={(selectedId: string) => { this.handleCardTabsChange(selectedId) }}
                    ></CardTabs>
                </div>
                <div className='line-chart-box'>
                    <LineChart chartData={chartData}></LineChart>
                </div>
            </div>
        )
    }
}
