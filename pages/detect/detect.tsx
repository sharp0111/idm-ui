import React from 'react'
import { Button } from '../../components'
import styles from './detect.module.scss'

import { MSG_BUTTON } from './messages'

export const Detect = () => {
  return (
    <div className={styles.main}>
      <Button color="secondary" variant="contained" size="large">{MSG_BUTTON}</Button>
  </div>
  )
}
