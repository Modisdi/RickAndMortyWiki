import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
// styles
import styles from './CharacterInfoPage.module.scss'
// actions
import { clearCharacterInfoStore, fetchCharacterInfo } from '../../store/modules/characterInfo'
// components
import Loader from '../../components/Loader/Loader'

const cx = classNames.bind(styles)


class CharacterInfoPage extends Component {
  state = {
    table: ['name', 'status', 'species', 'gender', 'origin', 'location'],
  }

  componentDidMount() {
    this.fetchCharacter()
  }

  componentWillUnmount() {
    const { clearCharacterInfoStore } = this.props
    clearCharacterInfoStore()
  }

  fetchCharacter = () => {
    const { fetchCharacterInfo, id } = this.props
    fetchCharacterInfo(id)
  }

  render() {
    const { table } = this.state
    const { character, isLoading } = this.props
    const { image } = character
    return (
      <>
        {!isLoading && (
        <div className={cx('container', 'characterWrapper')}>
          <Link className={cx('linkBack')} to='/characters' >{'< Список всех персонажей '}</Link>
          <img className={cx('avatar')} src={image} alt='avatar' />
          <div className={cx('wrapper')}>
            {table.map((key, index) => (
              <div className={cx('row')} key={index}>
                <span className={cx('title')}>{key}</span>
                <span className={cx('span')}>{character[key]}</span>
              </div>
            ))}
          </div>
        </div>
        )}
        {isLoading && <Loader />}
      </>
    )
  }
}


CharacterInfoPage.propTypes = {
  id: PropTypes.number,
  character: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchCharacterInfo: PropTypes.func.isRequired,
  clearCharacterInfoStore: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id)
  const { character, isLoading } = state.characterInfoReducer
  return {
    character, id, isLoading,
  }
}

export default connect(
  mapStateToProps,
  { fetchCharacterInfo, clearCharacterInfoStore },
)(CharacterInfoPage)
