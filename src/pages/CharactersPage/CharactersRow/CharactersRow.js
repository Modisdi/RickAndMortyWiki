import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './CharactersRow.module.scss'
import { ReactComponent as OpenIcon } from '../../../assets/icons/edit.svg'

const cx = classNames.bind(styles)


const CharactersRow = ({
  id, name, status, species, gender, origin, location,
}) => (
  <tr className={cx('tr')}>
    <td className={cx('td')}>{id}</td>
    <td className={cx('td')}>{name}</td>
    <td className={cx('td')}>{status}</td>
    <td className={cx('td')}>{species}</td>
    <td className={cx('td')}>{gender}</td>
    <td className={cx('td')}>{origin}</td>
    <td className={cx('td')}>{location}</td>
    <td className={cx('open')}>
      <Link to={`/character/${id}`}>
        <OpenIcon className={cx('openIcon')} />
      </Link>
    </td>
  </tr>
)


CharactersRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default CharactersRow
