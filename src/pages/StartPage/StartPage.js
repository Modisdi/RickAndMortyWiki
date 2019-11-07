import React from 'react'
import classNames from 'classnames/bind'
// styles
import styles from './StartPage.module.scss'

const cx = classNames.bind(styles)


const StartPage = () => (
  <div className={cx('container')}>
    <h2 className={cx('h2')}>Start</h2>
  </div>
)

export default StartPage
