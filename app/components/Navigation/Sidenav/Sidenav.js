import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import * as Paths from '../../../scripts/Paths'

import './sidenav.scss'

class Sidenav extends Component {
  render() {
    const { user, children } = this.props
    return (
      <nav className="sidenav clearfix">
        <div className="items items-logo">
          <div className="item">
            <div className="item-icon">
              <Link to={Paths.mobilizations()} style={{ height: '43px', display: 'block' }}>
                <u
                  className="logo-icon"
                  style={{
                    backgroundImage: user.community_avatar || 'url(http://placeholdit.imgix.net/~text?txtsize=14&txt=50x50&w=50&h=50&txttrack=0)'
                  }}
                />
              </Link>
            </div>
            <div className="item-content">
              <div className="table-cell align-middle">
                <div>
                  <div className="item-community-name">Nossas</div>
                  <div className="item-community-change">
                    <Link to={Paths.mobilizations()} className="col col-8">
                      <i className="fa fa-cog mr1" />
                      <span>Configurações</span>
                    </Link>
                    <Link to={Paths.mobilizations()} className="col col-4">
                      <i className="fa fa-refresh mr1" />
                      <span>Trocar</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </nav>
    )
  }
}

Sidenav.contextTypes = {
  router: PropTypes.object
}

export default Sidenav
