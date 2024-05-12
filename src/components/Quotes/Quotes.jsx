import React from 'react'
import styles from './quotes.module.css'

export default function Quotes({ quote }) {




  return (
    <blockquote className={styles.quote}>
      “{quote}”
    </blockquote>
  )
}
