import React from 'react'
import classNames from 'classnames/bind'
import styles from './NotFoundPage.module.scss'

const cx = classNames.bind(styles)


const NotFoundPage = () => (
  <div className={cx('container')}>
    <h1 className={cx('notFound')}>NodFound 404!</h1>
  </div>
)

export default NotFoundPage
