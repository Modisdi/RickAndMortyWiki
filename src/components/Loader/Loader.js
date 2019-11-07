import React from 'react'
import classNames from 'classnames/bind'
// scss
import styles from './Loader.module.scss'
// gif
import preloaderGif from '../../assets/gifs/loader.gif'

const cx = classNames.bind(styles)


const Loader = () => (
  <img className={cx('loader')} src={preloaderGif} alt='loader' />
)

export default Loader
