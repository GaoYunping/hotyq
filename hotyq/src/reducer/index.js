import { combineReducers } from 'redux'
//首页轮播图
export function toIndexCarousel(state = {'toIndexCarousel':{"reportList":[{"imgUrl":"","url":"","id":""}],"reportList2":[{"imgUrl":"","url":"","id":""}],"reportList3":[{"imgUrl":"","url":"","id":""}]}}, action) {
	let {type}=action
	switch (type) {
		case "SELECT_CAROUSELDATA":
	    return Object.assign({}, state, {
    	  toIndexCarousel:action.carouselData
      })
    default:
      return state
	}
}

const rootReducer={
	toIndexCarousel
}

export default rootReducer