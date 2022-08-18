import React from 'react'
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material'
import styles from './icon-button.module.scss'

const CN = 'icon-button-container'

type IconButtonProps = MuiIconButtonProps

export const IconButton = (props: IconButtonProps) => (
  <div className={styles[CN]}>
    <MuiIconButton {...props} />
  </div>
)
