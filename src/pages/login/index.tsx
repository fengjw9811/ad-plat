import React, { Component } from 'react'
import utils from '../../utils'

interface Props { }

export default class LoginPage extends Component<Props> {
    componentDidMount() {
        const id = utils.getUrlParam('id')
        console.log('id', id);
    }
    render() {
        return (
            <div>
                Hello, React.
                <span>here is login page.</span>
            </div>
        )
    }
}