import React, { Component } from 'react'
import { Button } from 'antd'
import './style.scss'

interface IProps { }

interface IStates {
    arrive: boolean,
    balance: number,
    creditValue: number
}
export default class Account extends Component<IProps, IStates> {
    state = {
        arrive: false, //0表示账金未到，1表示已到
        balance: 0,
        creditValue: 0
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                arrive: true,
                balance: 220,
                creditValue: 780
            })
        }, 2000)
    }

    render() {
        const { arrive, balance, creditValue } = this.state
        return (
            <div className="account-component-box">
                <div>
                    你好，冯嘉旺
                </div>
                <div className="examine">
                    {
                        arrive ? (
                            <div className="status-ok">开户金已到</div>
                        ) : (
                            <div className="status">开户金未到</div>
                        )
                    }
                </div>
                <div className="balance">
                    <div>
                        <div className="text">推广余额</div>
                        <div className="value">{balance}</div>
                    </div>
                    <Button type="primary" size="small">充值</Button>
                </div>
                <div className="credit">
                    <div>
                        <div className="text">合规信用值</div>
                        <div className="value">{creditValue}</div>
                    </div>
                    <div className="detail-text">详情</div>
                </div>
            </div>
        )
    }
}
