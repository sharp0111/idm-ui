import React from 'react'
import { TextField } from '../../components'
import { LABEL } from './messages'
import styles from './search.module.scss'

export const CN = 'search_container'

export const Search = () => {
  return (
    <div className={styles[CN]}>
      <TextField className={styles[`${CN}-textfield`]} id="outlined-basic" label={LABEL} variant="outlined" />
    </div>
  )
}
