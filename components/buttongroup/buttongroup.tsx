import React from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps as MuiButtonGroupProps } from '@mui/material'

type ButtonGroupProps = MuiButtonGroupProps;

export const ButtonGroup = (props: ButtonGroupProps) => (
  <MuiButtonGroup {...props} />
)
