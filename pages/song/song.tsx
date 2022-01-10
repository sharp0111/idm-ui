import React from 'react'
import { Button } from '../../components'
import styles from '../../styles/Home.module.scss'

import { MSG_BUTTON } from './messages'

export const Song = () => {
  return (
    <div className={styles.main}>
      <Button color="secondary" variant="contained" size="large">{MSG_BUTTON}</Button>
  </div>
  )
}
