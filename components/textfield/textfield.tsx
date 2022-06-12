import React from 'react'
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'
import styles from './textfield.module.scss'

export type TextFieldProps = MuiTextFieldProps

export function TextField(props: TextFieldProps) {
  return (
    <MuiTextField className={styles.main} {...props} />
  )
}
