import React, { Component } from 'react';
import { Button } from 'antd'
import axios from 'axios';
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
    render() {
        return (
            <div className='index-page'>
                Hello, React.
                <div className="middle-box">
                    <span>here is index page.</span>
                    <Button type="primary">按钮</Button>
                </div>
            </div>
        )
    }
}