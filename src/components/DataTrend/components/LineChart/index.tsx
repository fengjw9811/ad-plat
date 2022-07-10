import React, { Component } from 'react'
import { Line } from '@ant-design/charts'
import { chartDataType } from './types'
import './style.scss'

interface IProps {
    chartData: chartDataType[]
}
interface IStates { }

export default class LineChart extends Component<IProps, IStates> {
    render() {
        const { chartData } = this.props
        const config = {
            // autoFit: true,
            height: 250,
            data: chartData,
            xField: 'year',
            yField: 'value',
            label: {},
            point: {
                size: 2,
                shape: 'diamond',
                style: {
                    fill: 'white',
                    stroke: '#5B8FF9',
                    lineWidth: 2,
                },
            },
            tooltip: { showMarkers: false },
            state: {
                active: {
                    style: {
                        shadowBlur: 4,
                        stroke: '#000',
                        fill: 'red',
                    },
                },
            },
            interactions: [{ type: 'marker-active' }],
        };
        return (
            <div className='line-chart-component-box'>
                <Line {...config}></Line>
            </div>
        )
    }
}
