import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash/core'
import classNames from 'classnames/bind'
// styles
import styles from './CharactersPage.module.scss'
// actions
import { fetchCharacters, changeSearch, clearCharactersStore } from '../../store/modules/characters'
// components
import CharactersRow from './CharactersRow/CharactersRow'
import Loader from '../../components/Loader/Loader'
import Pagination from './Pagination/Pagination'

const cx = classNames.bind(styles)


class CharactersPage extends Component {
  componentDidMount() {
    this.handlerFetchCharacters()
  }

  componentWillUnmount() {
    const { clearCharactersStore } = this.props
    clearCharactersStore()
  }

  handlerFetchCharacters = () => {
    const { fetchCharacters } = this.props
    fetchCharacters()
  }

  render() {
    const {
      characters, isLoading, pagesCount, currentPage, search, changeSearch,
    } = this.props
    return (
      <div className={cx('container')}>
        <input className={cx('search')} type='search' value={search} onChange={changeSearch} />
        <table className={cx('table')}>
          <thead className={cx('thead')}>
            <tr className={cx('tr')}>
              <td className={cx('number')}>#</td>
              <th className={cx('th')}>name</th>
              <th className={cx('th')}>status</th>
              <th className={cx('th')}>species</th>
              <th className={cx('th')}>gender</th>
              <th className={cx('th')}>origin</th>
              <th className={cx('th')}>location</th>
              <th className={cx('open')} />
            </tr>
          </thead>
          <tbody>
            {characters.length > 0 && characters.map(character => (
              <CharactersRow
                key={character.id}
                {..._.pick(character, ['id', 'name', 'status', 'species', 'gender', 'origin', 'location'])}
              />
            ))}
          </tbody>
        </table>
        {isLoading && <Loader />}
        {characters.length === 0 && currentPage !== 0
        && <h2 className={cx('emptyList', 'container')}>No characters here :(</h2>}
        {(pagesCount > 1 || currentPage > pagesCount) && (
          <Pagination
            limit={5}
          />
        )}
      </div>
    )
  }
}


CharactersPage.propTypes = {
  search: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired,
  changeSearch: PropTypes.func.isRequired,
  clearCharactersStore: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const {
    characters, pagesCount, isLoading, currentPage, search,
  } = state.charactersReducer
  return {
    characters, pagesCount, isLoading, currentPage, search,
  }
}

export default connect(
  mapStateToProps,
  { fetchCharacters, changeSearch, clearCharactersStore },
)(CharactersPage)
