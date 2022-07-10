import React, { Component } from 'react'
import { Carousel } from 'antd'
import img1 from '../../../../assets/imgs/index-banner1.png'
import img2 from '../../../../assets/imgs/index-banner2.png'
import './style.scss'

export default class IndexBanner extends Component {
    render() {
        return (
            <div className="index-banner-component-box">
                <Carousel autoplay>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                </Carousel>
            </div>
        )
    }
}
