import React from 'react'

interface ArtistProps {
  name: string;
}

export function Artist(props: ArtistProps) {
  return (
    <div>{props.name}</div>
  )
}