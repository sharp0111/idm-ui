import React, { useState, useCallback } from 'react'
import { TextField, Button } from '../../components'
import { MSG_PLACEHOLDER, MSG_BUTTON } from './messages'
import styles from './search.module.scss'

export const CN = 'search_container'

export const Search: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<any>();

  const handleChange = useCallback((event: React.BaseSyntheticEvent) => {
    const value = event.target.value;
    setSearchValue(value)
  }, [setSearchValue])

  const handleClick = useCallback(async (event: React.BaseSyntheticEvent) => {
    event.preventDefault()
    try {
      const response = await fetch(`http://127.0.0.1:5000/search?term=${searchValue}`)
      console.log(response);
    } catch (error) {
      console.error(JSON.parse(JSON.stringify(error)))
      throw error
    }
  }, [searchValue])

  return (
    <div className={styles[CN]}>
      <TextField
        autoFocus
        className={styles[`${CN}-textfield`]}
        id="outlined-basic"
        label={MSG_PLACEHOLDER}
        onChange={handleChange}
        type="search"
        value={searchValue}
        variant="outlined" />
        <Button
          className={`${CN}-button`}
          onClick={handleClick}
          variant="outlined"
        >
          {MSG_BUTTON}
        </Button>
    </div>
  )
}
