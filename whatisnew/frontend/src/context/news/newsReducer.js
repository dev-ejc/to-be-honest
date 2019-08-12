import {GET_NEWS, SET_LOADING, SET_TOPIC, CLEAR_ERROR, SET_ERROR, STOP_LOADING} from './types'
export default (state,action) => {
    switch(action.type) {
        case SET_TOPIC:
            return {
                ...state,
                topic: action.payload
            }
            case SET_ERROR:
                    return {
                        ...state,
                        error: {msg:action.payload.msg, type: action.payload.type}
                    }
            case CLEAR_ERROR:
                return {
                    ...state,
                    error:null
                }
        case GET_NEWS:
                return { ...state,
                        news: action.payload,
                    loading:false }
        case SET_LOADING: 
                return {
                    ...state,
                    loading:true
                }
        case STOP_LOADING: 
                return {
                    ...state,
                    loading:false
                }
        default:
                return state
    }
}