import React from 'react'
import { TITLE, ARTIST, AUDIO } from './messages'

const SONG_DETAILS = {
  title: 'River Flows In You',
  artist: 'Yiruma',
  audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cb/24/ac/cb24ac75-128c-f817-7d81-7fbffbdaafe3/mzaf_1522770279362005862.plus.aac.ep.m4a'
}

interface DetailsProps {
  artist: string,
  title: string
}

export const Details = (props: DetailsProps) => {
  const { artist, title } = props

  return (
    <>
      <div>{TITLE}: {SONG_DETAILS.title}</div>
      <div>{ARTIST}: {SONG_DETAILS.artist}</div>
      <div>{AUDIO}: <a href={SONG_DETAILS.audio} target="_blank" rel="noreferrer">Click</a></div>
    </>
  )
}