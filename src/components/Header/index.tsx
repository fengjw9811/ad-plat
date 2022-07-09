import React, { Component } from 'react';
import { MENU_CONFIG } from '../../common/constants/menu'
import MenuItem from './MenuItem';
import { UserOutlined } from '@ant-design/icons'
import './style.scss'

export default class Header extends Component {
    state = {}
    render() {
        const username = 'fengjw'
        return (
            <div className='header-box'>
                <div className='left'>
                    <div className="logo"></div>
                    <div className="menu">
                        {
                            MENU_CONFIG.map((menuItem, index) => (
                                <MenuItem key={`menu${index}`} menuItemInfo={menuItem} isActive={menuItem.isActive}></MenuItem>
                            ))
                        }
                    </div>
                </div>
                <div className="user-info">
                    <UserOutlined></UserOutlined>
                    &nbsp;&nbsp;
                    <span>{username}</span>
                </div>
            </div>
        )
    }
}
