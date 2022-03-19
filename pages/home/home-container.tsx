import React from 'react'
import { Button } from '../../components'
import { ActiveLink, IDM_URL } from '../routing'

import { MSG_IDM } from './messages'

export function HomeContainer() {
  return (
    <>
      <ActiveLink href={IDM_URL}>
        <Button color="secondary" variant="contained" size="large">{MSG_IDM}</Button>
      </ActiveLink>
    </>
  )
}
