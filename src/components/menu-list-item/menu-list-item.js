import React from 'react';
import {Link} from 'react-router-dom';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddtoCart}) => {
    const {title, price, category, url } = menuItem;
    return (
            <li className="menu__item">
               <Link to={`/${menuItem.id}`} className="menu__link">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
               </Link>
                <button onClick={() => onAddtoCart()} className="menu__btn">Add to cart</button>
            </li>
            )
}

export default MenuListItem;