import React from 'react'
import { Button as MuiButton, ButtonProps as MuiButtonProps} from '@mui/material'
import styles from './button.module.scss'

const CN = 'button-container'

type ButtonProps = MuiButtonProps

export const Button = (props: ButtonProps) => (
  <div className={styles[CN]}>
    <MuiButton {...props} />
  </div>
)
