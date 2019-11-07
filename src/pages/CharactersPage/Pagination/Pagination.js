import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import classNames from 'classnames/bind'
// styles
import styles from './Pagination.module.scss'
// actions
import { changePage } from '../../../store/modules/characters'

const cx = classNames.bind(styles)


const Pagination = ({
  pagesCount, currentPage, limit, changePage,
}) => {
  const indentLimit = (limit - 1) / 2
  const indentPage = (pagesCount - currentPage) >= indentLimit ? indentLimit
    : limit - 1 - (pagesCount - currentPage)
  const handlerChangePages = page => () => {
    changePage(page)
  }
  return (
    <div className={cx('pagination')}>
      <button
        disabled={currentPage === 1}
        type='button'
        className={cx('arrows', { activeArrows: currentPage !== 1 })}
        onClick={handlerChangePages(currentPage - 1)}
      >
        {'<'}
      </button>
      {currentPage > indentLimit + 1 && pagesCount > limit && (
        <button
          type='button'
          className={cx('points')}
          onClick={handlerChangePages(1)}
        >
          ...
        </button>
      )}
      {_.times(Math.min(limit, pagesCount), page => {
        const nowPage = currentPage > indentPage ? page + currentPage - indentPage : page + 1
        return (
          <button
            disabled={currentPage === nowPage}
            key={nowPage}
            type='button'
            className={cx('tabs', { activeTabs: currentPage === nowPage })}
            onClick={handlerChangePages(nowPage)}
          >
            {nowPage}
          </button>
        )
      })}
      {currentPage < pagesCount - indentLimit && pagesCount > limit && (
        <button
          disabled={currentPage === pagesCount}
          type='button'
          className={cx('points')}
          onClick={handlerChangePages(pagesCount)}
        >
          ...
        </button>
      )}
      <button
        disabled={currentPage === pagesCount}
        type='button'
        className={cx('arrows', { activeArrows: currentPage !== pagesCount })}
        onClick={handlerChangePages(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  )
}


Pagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { pagesCount, currentPage } = state.charactersReducer
  return {
    pagesCount, currentPage,
  }
}

export default connect(
  mapStateToProps,
  { changePage },
)(Pagination)
