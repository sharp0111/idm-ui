import React from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps {
  children: React.ReactElement,
  href: string
}

export function ActiveLink(props: ActiveLinkProps) {
  const { children, href } = props
  const router = useRouter()
  const style = {
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}
