import React from 'react'
import { Button, ButtonGroup } from '../../components'
import { ActiveLink, ID_SONG_URL } from '../routing'

import { MSG_ID_SONG } from './messages'

export function HomeContainer() {
  return (
    <ButtonGroup>
      <ActiveLink href={ID_SONG_URL}>
        <Button color="secondary" variant="contained" size="large">{MSG_ID_SONG}</Button>
      </ActiveLink>
    </ButtonGroup>
  )
}
