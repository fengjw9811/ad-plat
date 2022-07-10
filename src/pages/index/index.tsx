import React, { Component } from 'react';
import axios from 'axios';
import { Select, DatePicker } from 'antd';
import moment from 'moment';
import { RouteComponentProps } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Account from './components/Account';
import Chart from '../../components/DataTrend';
import IndexBanner from './components/IndexBanner';
import ProductCard from './components/ProductCard';
import ProductNews from './components/ProductNews';
import PromotionCard from './components/PromotionCard';
import './style.scss'

interface Props extends RouteComponentProps { }

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

    handleSelectChange = () => {

    }

    render() {
        const { history } = this.props
        const { Option } = Select
        return (
            <div className='index-page'>
                <div className="head-box">
                    <Header></Header>
                </div>
                <div className="content-box">
                    <div className='left-content'>
                        <div className="chart-area">
                            <div className='text-info-box'>
                                <div className='text-style'>数据趋势</div>
                                <div className='select-box'>
                                    <Select defaultValue="全部推广产品" style={{ fontSize: '12px', width: 120, marginRight: 10 }} onChange={this.handleSelectChange}>
                                        <Option value="0">全部推广产品</Option>
                                        <Option value="1">搜索推广</Option>
                                        <Option value="2">一站式推广</Option>
                                        <Option value="3">合约推广</Option>
                                        <Option value="4">知识营销</Option>
                                    </Select>
                                    <DatePicker onChange={this.handleDateChange} />
                                </div>
                            </div>
                            <Chart></Chart>
                        </div>
                        <div className="promotion-card-area">
                            <PromotionCard history={history}></PromotionCard>
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
