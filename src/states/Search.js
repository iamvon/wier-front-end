import {atom, selector} from "recoil";


const Search = atom({
    key: 'searchResult', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

export {Search}