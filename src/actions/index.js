// Создаем  actionCreator
const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
};

const menuErrored = () => {
    return {
        type: 'MENU_ERRORED',
    }
};

const addedToCard = (id) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: id
    }
};

const deletedFromCart = (id) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: id
    }
};

export {
    menuLoaded,
    menuRequested,
    menuErrored,
    addedToCard,
    deletedFromCart
}