import {atom, selector} from "recoil";


const CartState = atom({
    key: 'cart', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

const itemInCart = selector({
    key: 'itemInCart', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        // eslint-disable-next-line no-undef
        const item = get(CartState);
        let totalQuantity=0;
        item.forEach(el => {
            totalQuantity += el.quantity
        })
        return totalQuantity;
    },
});
export {CartState,itemInCart}