
// Создаем сервис,  который будет возвращать нам меню items
export default class RestoService {
    _apiBase = 'http://localhost:3000'
    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${res.url}, ${res.status}`)
        }
        return await res.json();
    }

    async getMenuItems() {
        return await this.getResources('/menu/')
    }
    async getItem(id) {
        const res = await this.getResource('/menu/');
        console.log(res);
        const item = res.find( (el) => {
            console.log(`el.id: ${el.id}, id: ${id}`);
            return el.id === +id;
        }) 
        console.log(item);
        return item;
    }

    async setOrder(order) {
        const number = await this.getOrderNumber();
        const newOrder = {
            id: number,
            order: order
        }
        const response = await fetch(`${this._apiBase}/orders`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });
        if (!response.ok){
            throw new Error('json error'); 
        }
    }

    async getOrderNumber(){
        const res = await this.getResources('/orders/');
        const orderNumber = res.length + 1;

        return orderNumber;
    }
}