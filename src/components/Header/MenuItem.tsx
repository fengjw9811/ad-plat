import React, { Component } from 'react';
import { MenuItemInfoType } from './types';
import './style.scss'

interface IProps {
    isActive?: boolean,
    onClick?: (url: string) => void,
    menuItemInfo: MenuItemInfoType
}

export default class MenuItem extends Component<IProps> {
    handleMenuClick = (url: string) => {
        const { onClick } = this.props
        if (onClick) {
            onClick(url)
        }
    }
    render() {
        const { menuItemInfo, isActive } = this.props
        return (
            <div className='index-menuItem-box'>
                <div className='menu-item-title' onClick={() => { this.handleMenuClick(menuItemInfo.url) }}>
                    {menuItemInfo.name}
                    {
                        menuItemInfo.menuChildren.length > 0 && (<span className='arrow-icon'></span>)
                    }
                </div>
                <div className='bottom-line'></div>
                {
                    isActive && <div className="bottom-line-active"></div>
                }
                {
                    menuItemInfo.menuChildren.length > 0 && (
                        <div className="menu-children-box">
                            {
                                menuItemInfo.menuChildren.map((item, index) => (
                                    <div className='menu-children' key={`menu-child${index.toString()}`}>
                                        <span onClick={() => this.handleMenuClick(item.url)}>{item.label}</span>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}
