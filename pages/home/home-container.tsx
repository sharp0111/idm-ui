import React from 'react'
import Search from '../search'
import styles from './home.module.scss'

export const CN = 'home_container'

export const HomeContainer = () => (
  <div className={styles[CN]}>
    <Search />
  </div>
)
