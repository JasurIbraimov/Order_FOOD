import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deletedFromCart} from '../../actions';
import WithRestoService from '../hoc';
const CartTable = ({items, deletedFromCart, RestoService}) => {
    if(items.length === 0) {
        return (<div className="cart__empty">Ваша корзина пуста!</div>)
    }
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                       
                        const {title, url, id, price, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-counter">{count}</div>
                                <div onClick={() => deletedFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => RestoService.setOrder(generateOrder(items))}  className="cart__btn">Оформить заказ!</button>
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    })
    return newOrder;
}
const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    deletedFromCart
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));