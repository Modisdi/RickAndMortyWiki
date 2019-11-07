import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
// styles
import styles from './Header.module.scss'

const cx = classNames.bind(styles)


const Header = ({ pathname }) => (
  <header className={cx('header', 'container')}>
    <nav className={cx('nav')}>
      <ul className={cx('ul')}>
        <li className={cx('li', { activeLi: pathname === '/' })}>
          <Link to='/'>
            Старт приложения
          </Link>
        </li>
      </ul>
      <ul>
        <li className={cx('li', { activeLi: pathname.indexOf('/characters') === 0 })}>
          <Link to='/characters'>
            Список всех персонажей
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)


Header.propTypes = {
  pathname: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  const { pathname } = state.router.location
  return {
    pathname,
  }
}

export default connect(
  mapStateToProps,
  { push },
)(Header)
