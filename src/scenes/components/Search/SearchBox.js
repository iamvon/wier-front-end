import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";
import api from "../../../services/api";
import {Search} from "../../../states/Search";
import {atom, useRecoilState} from 'recoil';

export default function SearchBox() {
    let [word, setWord] = useState('');
    const [, setSeach] = useRecoilState(Search);

    return (
        <SearchBar
            onChange={e => setWord(e)}
            onRequestSearch={async () => {
                let res = await api.get(`para_search?query=${word}&order=desc&page=0&sortBy=sales/ctime`).json()
                console.log(res)
                setSeach(res.items_list)
            }}
            placeholder="Tìm kiếm sản phẩm"
        />
    );
}