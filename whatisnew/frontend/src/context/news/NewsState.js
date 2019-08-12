import React, { useReducer } from "react";
import { GET_NEWS, SET_LOADING, SET_ERROR, CLEAR_ERROR } from "./types";
import NewsContext from "./newsContext";
import newsReducer from "./newsReducer";
import axios from "axios";
const NewsState = props => {
  const initialState = {
    topic:'',
    news: null,
    error:null,
    loading: false
  };

  const [state, dispatch] = useReducer(newsReducer, initialState);

  const getNews = () => {
    setLoading();
    };
    axios
      .get("/news/${state.topic}", configs)
      .then(res =>
        dispatch({
          type: GET_NEWS,
          payload: res.data
        })
      )
      .catch(err => {
        setError(err.message,"danger")
        console.error(err);
      });
  };

  const setError = (msg,type) => {
    dispatch({
      type: SET_ERROR,
      payload: { msg,type }
    })
    setTimeout(() => {
      clearError()
    },5000)
  }

  const clearError = () => {
    dispatch({
      type: CLEAR_ERROR
    })
  }

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };
  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        loading: state.loading,
        error: state.error,
        topic: state.topic,
        setTopic,
        getNews
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
