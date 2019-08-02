export const OPEN_BOTTLE_MODAL = 'OPEN_BOTTLE_MODAL';
export const CLOSE_BOTTLE_MODAL = 'CLOSE_BOTTLE_MODAL';

export const openBottleModal = bottleModal => {
  return ({
    type: OPEN_BOTTLE_MODAL,
    bottleModal
  })
}

export const closeBottleModal = () => {
  return ({
    type: CLOSE_BOTTLE_MODAL
  })
}