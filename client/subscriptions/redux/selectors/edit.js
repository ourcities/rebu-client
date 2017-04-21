export default (state, props) => {
  const edit = state.subscriptions.edit

  return {
    getModificationType: () => edit.modificationType,
    getAnimationStack: () => edit.animationStack,
    getCard: () => edit.data.last_donation.gateway_data.card
  }
}
