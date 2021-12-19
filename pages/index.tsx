import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

import { Button } from '../components'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Button variant="contained">Click Me</Button>
    </div>
  )
}

export default Home
