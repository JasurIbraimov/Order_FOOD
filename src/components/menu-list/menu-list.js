import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import {connect} from 'react-redux';
import {menuLoaded, menuRequested, menuErrored, addedToCard} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import WithRestoService from '../hoc';

class MenuList extends Component {

    componentDidMount() {
        const {RestoService} = this.props;
        this.props.menuRequested();
        RestoService.getMenuItems()
            .then((res) => this.props.menuLoaded(res))
            .catch((e) => this.props.menuErrored())

    }
    render() {
        const {menuItems, loading, error, addedToCard} = this.props;

        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <Error/>
        }

        const items = menuItems.map(menuItem => {
            return <MenuListItem 
                    key={menuItem.id} 
                    menuItem={menuItem}
                    onAddtoCart={() => addedToCard(menuItem.id)}
                    />
        })
        return (
            <View items={items}/>
        )
    }
};

const View = ({items}) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
}

const mapStatetoProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchtoProps = {
    menuLoaded, 
    menuRequested, 
    menuErrored, 
    addedToCard
    // return {
    //     menuLoaded: (newMenu) => {
    //         dispatch({
    //             type: 'MENU_LOADED',
    //             payload: newMenu
    //         })
    //     }
    // }
};

export default WithRestoService()(connect(mapStatetoProps, mapDispatchtoProps)(MenuList));