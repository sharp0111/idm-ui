import React from 'react'
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material'
import styles from './icon-button.module.scss'

const CN = 'icon-button-container'

interface CustomProps {
  containerclass?: string
}

type IconButtonProps = MuiIconButtonProps & CustomProps

export const IconButton = (props: IconButtonProps) => {
  const containerClassName = `${styles[CN]} ${props.containerclass}`

  return (
    <div className={containerClassName}>
      <MuiIconButton {...props} />
    </div>
  )
}
