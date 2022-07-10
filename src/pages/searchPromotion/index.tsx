import React, { Component } from 'react'
import Header from '../../components/Header'
import Account from './components/Account'
import DataTrend from '../../components/DataTrend'
import UserPortrait from './components/UserPortrait'
import WaveAnalysis from './components/WaveAnalysis'
import icon1Selected from '../../assets/imgs/card-icon1-selected.png'
import icon1 from '../../assets/imgs/card-icon1.png'
import icon2Selected from '../../assets/imgs/card-icon2-selected.png'
import icon2 from '../../assets/imgs/card-icon2.png'
import icon3Selected from '../../assets/imgs/card-icon3-selected.png'
import icon3 from '../../assets/imgs/card-icon3.png'
import './style.scss'

const cardData = [
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
        percent: '',
        icon: icon2,
        iconSelected: icon2Selected,
        isSelected: false
    },
    {
        id: '3',
        name: '点击（次）',
        value: 199,
        percent: '',
        icon: icon3,
        iconSelected: icon3Selected,
        isSelected: false,
    },
    {
        id: '4',
        name: '展现人数（人）',
        value: 20000,
        percent: '',
        icon: icon3,
        iconSelected: icon3Selected,
        isSelected: false,
    },
    {
        id: '5',
        name: '点击人数（人）',
        value: 8000,
        percent: '',
        icon: icon3,
        iconSelected: icon3Selected,
        isSelected: false,
    },
]

export default class SearchPromotionPage extends Component {
    render() {
        return (
            <div className='search-promotion-box'>
                <div className="header">
                    <Header></Header>
                </div>
                <div className="content">
                    <div className="account-box">
                        <Account></Account>
                    </div>
                    <div className="data-trend-box">
                        <div className="data-trend-title">数据趋势</div>
                        <DataTrend cardData={cardData}></DataTrend>
                    </div>
                    <div className="wave-analysis-box">
                        <WaveAnalysis></WaveAnalysis>
                    </div>
                    <div className="user-portrait-box">
                        <UserPortrait></UserPortrait>
                    </div>
                </div>
                <div className="footer">footer</div>
            </div>
        )
    }
}
