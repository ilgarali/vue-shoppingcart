export const addToCart = ({commit},id) => {
  
    commit('Added',id)
}
export const removeItem =({commit},id) => {
    commit('ITEM_REMOVED',id)
}

export const checkDiscount = ({commit},cuopon) => {
    commit('CHECK_DISCOUNT',cuopon)
}