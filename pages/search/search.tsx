import React, { useState, useCallback, useEffect } from 'react'
import { TextField, IconButton, SearchIcon } from '../../components'
import { MSG_PLACEHOLDER } from './messages'

export const Search: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<any>();

  const handleChange = useCallback((event: React.BaseSyntheticEvent) => {
    const value = event.target.value;
    setSearchValue(value)
  }, [setSearchValue])

  const fetchResults = useCallback(async () => {
    const response = await fetch(`http://127.0.0.1:5000/search?term=${searchValue}`)
    return response.json()
  }, [searchValue])

  const handleClick = useCallback(async (event: React.BaseSyntheticEvent) => {
    event.preventDefault()
    try {
      const data = await fetchResults()
      setSearchResults(data)
    } catch (error) {
      console.error(JSON.parse(JSON.stringify(error)))
      throw error
    }
  }, [fetchResults])

  useEffect(() => {
    console.log(searchResults)
  }, [searchResults])

  return (
    <div id="container">
      <TextField
        autoFocus
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
          )
        }}
        id="outlined-basic"
        label={MSG_PLACEHOLDER}
        onChange={handleChange}
        type="search"
        value={searchValue}
        variant="outlined"
      />
    </div>
  )
}
