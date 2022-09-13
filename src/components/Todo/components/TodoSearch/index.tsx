import { useState } from 'react';
// import cls from './TodoSearch.module.scss';
import {
  TextField
} from '@mui/material';

type Props = {
  onSearch: Function
}

const TodoSearch: React.FC<Props> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)

    if(!!searchValue) {
      onSearch(e.target.value);
    }
  }

  return (
    <TextField
      type="search"
      label="Поиск"
      placeholder="Введите значение"
      value={searchValue}
      onChange={changeSearchValue}
    />
  )
}

export default TodoSearch;