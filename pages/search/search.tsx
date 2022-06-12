import React from 'react'
import { TextField } from '../../components'

import { LABEL } from './messages'

export function Search() {
  return (
    <TextField id="standard-basic" label={LABEL} variant="standard" />
  )
}
