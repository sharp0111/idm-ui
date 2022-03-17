import React from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps as MuiButtonGroupProps } from '@mui/material'

import styles from './buttongroup.module.scss'

type ButtonGroupProps = MuiButtonGroupProps;

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <div className={styles.main}>
      <MuiButtonGroup {...props} />
    </div>
  )
}