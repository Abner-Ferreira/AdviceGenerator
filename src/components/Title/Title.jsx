import React from 'react'
import styles from './title.module.css'

export default function Title({title}) {

  console.log(title)

  return (
    <h1 className={styles.title}>ADVICE # {title}</h1>
  )
}
