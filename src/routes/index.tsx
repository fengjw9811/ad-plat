import React, { Component } from 'react'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import IndexPage from '../pages/index'
import LoginPage from '../pages/login'
import SearchPromotionPage from '../pages/searchPromotion'
import App from '../App'

const allRoutes = [
    {
        path: '/index',
        exact: false,
        component: IndexPage,
        title: ''
    },
    {
        path: '/login',
        exact: false,
        component: LoginPage,
        title: ''
    },
    {
        path: '/search',
        exact: false,
        component: SearchPromotionPage,
        title: ''
    }
]

const AppWrap = withRouter(App)

export default class AppRoute extends Component {
    render() {
        return (
            <div>
                <Router>
                    <AppWrap>
                        {
                            renderRoutes(allRoutes.map(item => ({ ...item, key: item.path })))
                        }
                    </AppWrap>
                </Router>
            </div>
        )
    }
}
