import {atom, selector} from "recoil";


const CartState = atom({
    key: 'cart', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

const itemInCart = selector({
    key: 'itemInCart', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        // eslint-disable-next-line no-undef
        let a = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []
        console.log(a)
        const item = get(CartState) ;
        console.log(item)
        let totalQuantity = 0;
        // eslint-disable-next-line no-unused-expressions
        a?.forEach(el => {
            totalQuantity += el?.quantity ? el.quantity : 1
        })
        return totalQuantity;

    },
});
export {CartState, itemInCart}