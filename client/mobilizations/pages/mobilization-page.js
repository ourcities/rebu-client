import React, { Component, PropTypes } from 'react'
import { Navigation } from 'react-router'
import reactMixin from 'react-mixin'
import { connect } from 'react-redux'

// Global module dependencies
import * as paths from '~client/paths'

// Children module dependencies
import { selectors as BlockSelectors } from '~mobilizations/blocks'
import { selectors as WidgetSelectors } from '~mobilizations/widgets'

// Current module dependencies
import * as MobilizationSelectors from '../selectors'
import { Mobilization } from '../components'

// @revert @reactMixin.decorate(Navigation)
export class MobilizationPage extends Component {

  componentDidMount () {
    const { mobilization, blocksIsLoaded, blocks } = this.props
    if (blocksIsLoaded && blocks.length === 0) {
      this.transitionTo(paths.mobilizationTemplatesChoose(mobilization))
    }
  }

  render () {
    return <Mobilization {...this.props} editable />
  }
}

MobilizationPage.propTypes = {
  mobilization: PropTypes.object,
  blocks: PropTypes.array,
  blocksIsLoaded: PropTypes.bool,
  blockEditionMode: PropTypes.bool,
  widgets: PropTypes.array
}

const mapStateToProps = state => ({
  mobilization: MobilizationSelectors.getCurrent(state),
  blocks: BlockSelectors.getList(state),
  blocksIsLoaded: BlockSelectors.isLoaded(state),
  blockEditionMode: BlockSelectors.isEditionMode(state),
  widgets: WidgetSelectors.getList(state),
  auth: state.auth
})

export default connect(mapStateToProps)(MobilizationPage)
