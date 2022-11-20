import * as React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'

const Home = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Fullstack developer</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
}

export default Home
