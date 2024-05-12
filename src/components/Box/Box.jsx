import React from 'react'
import styles from './box.module.css'

export default function Box({children}) {
  return (
    <>
      <section className={styles.container}>
          {children}
      </section>
    </>
  )
}
