import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Account from './components/Account';
import Chart from './components/DataTrend';
import IndexBanner from './components/IndexBanner';
import ProductCard from './components/ProductCard';
import ProductNews from './components/ProductNews';
import PromotionCard from './components/PromotionCard';
import './style.scss'

interface Props { }

export default class IndexPage extends Component<Props> {
    componentDidMount() {
        axios.get('/ad/index/gray').then(res => {
            console.log('res', res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    handleDateChange = (date: moment.Moment | null) => {
        console.log('date change', moment(date).unix());
    }
    render() {
        return (
            <div className='index-page'>
                <div className="head-box">
                    <Header></Header>
                </div>
                <div className="content-box">
                    <div className='left-content'>
                        <div className="chart-area">
                            <Chart></Chart>
                        </div>
                        <div className="promotion-card-area">
                            <PromotionCard></PromotionCard>
                        </div>
                        <div className="product-card-area">
                            <ProductCard></ProductCard>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className="account-area">
                            <Account></Account>
                        </div>
                        <div className="index-banner-area">
                            <IndexBanner></IndexBanner>
                        </div>
                        <div className="product-news-area">
                            <ProductNews></ProductNews>
                        </div>
                    </div>
                </div>
                <div className="foot-box">
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
