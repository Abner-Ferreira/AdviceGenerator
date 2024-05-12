import React, { useContext } from 'react'
import dice from '../../assets/icon-dice.svg'
import styles from './dice.module.css'
import { ContextAdvice } from '../../context/ContextAdvice'

export default function Dice() {
  
  const {changeAdvice} = useContext((ContextAdvice))

  return (
    <>
      <div className={styles.diceContainer} onClick={changeAdvice}>
        <img src={dice} alt="Dice image" />
      </div>
    </>
  )

}
