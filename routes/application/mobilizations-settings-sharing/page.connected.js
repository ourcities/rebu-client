import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as MobilizationSelectors from '~mobilizations/selectors'
import * as MobilizationActions from '~mobilizations/action-creators'
import MobilizationSharingPage from './page'

const redial = {
  fetch: ({ dispatch, getState, params }) => {
    const state = getState()
    const promises = []

    !MobilizationSelectors.hasCurrent(state) && promises.push(
      dispatch(MobilizationActions.select(params.mobilization_id))
    )
    return Promise.all(promises)
  }
}

const fields = [
  'id',
  'facebook_share_image',
  'facebook_share_title',
  'facebook_share_description',
  'twitter_share_text'
]

const mapStateToProps = state => {
  const mobilization = MobilizationSelectors.getCurrent(state)
  return {
    initialValues: mobilization,
    mobilization
  }
}

const mapActionCreatorsToProps = {
  submit: MobilizationActions.asyncUpdate
}

export default provideHooks(redial)(
  connect(mapStateToProps, mapActionCreatorsToProps)(
    reduxForm({
      form: 'mobilizationSharingForm',
      fields
    })(MobilizationSharingPage)
  )
)
