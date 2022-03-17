import React from 'react'
import { Button, ButtonGroup } from '../../components'
import { ActiveLink, DETECT_URL, CHART_URL, DETAILS_URL } from '../routing'

import { MSG_DETECT, MSG_CHART, MSG_DETAILS } from './messages'

export function HomeContainer() {
  return (
    <ButtonGroup>
      <ActiveLink href={DETECT_URL}>
        <Button color="secondary" variant="contained" size="large">{MSG_DETECT}</Button>
      </ActiveLink>
      <ActiveLink href={CHART_URL}>
        <Button color="secondary" variant="contained" size="large">{MSG_CHART}</Button>
      </ActiveLink>
      <ActiveLink href={DETAILS_URL}>
        <Button color="secondary" variant="contained" size="large">{MSG_DETAILS}</Button>
      </ActiveLink>
    </ButtonGroup>
  )
}
