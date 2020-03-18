
import React, { useState } from "react";

const NavItem = (item) => {
    const [isExpand, setIsExpand] = useState(item.isExpand);
    
    return (
        <li className={isExpand ? 'nav-item has-treeview menu-open' : 'nav-item'}>
            <a href="#" className={item.isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsExpand(!isExpand)} >
                <i class={item.icon}></i>
                <p>
                    {item.mainMenu}
                    {item.childMenu ? <i class="right fas fa-angle-left"></i>: ''}
                </p>
            </a>

            <ul class="nav nav-treeview">
                {
                    item.childMenu ?
                        item.childMenu.map(child =>
                            <li class="nav-item" className={'nav-item '}>
                                <a href="./index.html" class="nav-link">
                                    <i class={child.icon}></i>
                                    <p>{child.text}</p>
                                </a>
                            </li>
                        ) : ''
                }
            </ul>
        </li>
    )
}
export default NavItem;