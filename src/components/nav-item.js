
import React, { useState, useEffect } from "react";
import {
    Link
  } from "react-router-dom";

const NavItem = (item) => {
    const [isExpand, setIsExpand] = useState(item.isExpand);
    const [isActive, setIsActive] = useState(window.location.pathname === ('/' + (item.link || '')));

    return (
        <li className={isExpand ? 'nav-item has-treeview menu-open' : 'nav-item'}>
            <Link to={item.link || '#'} className={isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsExpand(!isExpand)} >
                <i class={item.icon}></i>
                <p>
                    {item.mainMenu}
                    {item.childMenu ? <i class="right fas fa-angle-left"></i> : ''}
                </p>
            </Link>
            <ul class="nav nav-treeview">
                {
                    item.childMenu ?
                        item.childMenu.map(child =>
                            <li class="nav-item" className={'nav-item '}>
                                <Link to={child.link || '#'} class="nav-link">
                                    <i class={child.icon}></i>
                                    <p>{child.text}</p>
                                </Link>
                            </li>
                        ) : ''
                }
            </ul>
        </li>
    )
}
export default NavItem;