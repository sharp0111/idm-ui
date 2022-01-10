import React, { ReactNode } from 'react'
import { Button as MuiButton, ButtonProps as MuiButtonProps} from '@mui/material';

import styles from './button.module.scss'

type ButtonProps = MuiButtonProps;

export const Button = (props: ButtonProps) => {
  return (
    <div className={styles.container}>
      <MuiButton {...props} />
    </div>
  )
}