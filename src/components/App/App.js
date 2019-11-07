import React from 'react'
import PropTypes from 'prop-types'
// connected-react-router
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
// classNames
import classNames from 'classnames/bind'
// scss
import '../../assets/fonts/fonts.scss'
import './reset.css'
import styles from './App.module.scss'
// components
import Header from '../Header/Header'
// pages
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import StartPage from '../../pages/StartPage/StartPage'
import CharactersPage from '../../pages/CharactersPage/CharactersPage'
import CharacterInfoPage from '../../pages/CharacterInfoPage/CharacterInfoPage'

const cx = classNames.bind(styles)


const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div className={cx('bodyBackground')}>
      <Header />
      <Switch>
        <Route path='/not-found' component={NotFoundPage} />
        <Route exact path='/' component={StartPage} />
        <Route exact path='/characters' component={CharactersPage} />
        <Route exact path='/character/:id' component={CharacterInfoPage} />
        <Redirect to='/not-found' />
      </Switch>
    </div>
  </ConnectedRouter>
)


App.propTypes = {
  history: PropTypes.object.isRequired,
}

export default App
