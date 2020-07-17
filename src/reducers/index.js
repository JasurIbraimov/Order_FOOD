// Создаем значени по умолчанию для state
const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
}
// Создаем фукнцию reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MENU_LOADED': 
            return {
                ...state,
                menu: action.payload,
                loading: false,
            }
        case 'MENU_REQUESTED': 
            return {
                ...state,
                loading: true,
            }
        case 'MENU_ERRORED': 
            return {
                ...state,
                error: true
            }
        case 'ITEM_ADDED_TO_CART': 
            const id = action.payload;
            // находим элемент в items, и проверяем его количесво по числу найденных индексов
            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0) {
                // если больше 0, то находим этот элемент 
                const itemInState = state.items.find(item => item.id === id);
                // на его основе создаем новый элемент, с увеличением count 
                const newItem = {
                    ...itemInState,
                    count: ++itemInState.count
                }
                // и возвращаем 
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                count: 1
            }
            return {
                ...state, 
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            }
        case 'ITEM_REMOVED_FROM_CART': 
            const index = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === index);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['count'];
            return {
                ...state, 
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - price
            }
        default: 
            return state;
    }
};

export default reducer;