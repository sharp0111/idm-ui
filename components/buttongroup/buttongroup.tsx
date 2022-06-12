import React from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps as MuiButtonGroupProps } from '@mui/material'

type ButtonGroupProps = MuiButtonGroupProps;

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <div>
      <MuiButtonGroup {...props} />
    </div>
  )
}
