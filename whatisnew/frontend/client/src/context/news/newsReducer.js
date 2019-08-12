import {GET_NEWS, SET_LOADING} from './types'
export default (state,action) => {
    switch(action.type) {
        case GET_NEWS:
                return { ...state,
                        news: action.payload,
                    loading:false }
        case SET_LOADING: 
                return {
                    ...state,
                    loading:true
                }
        default:
                return state
    }
}