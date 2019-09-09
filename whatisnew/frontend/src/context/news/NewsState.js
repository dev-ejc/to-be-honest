import React, { useReducer } from "react";
import { GET_HEADLINES,GET_NEWS, SET_LOADING, SET_ERROR, CLEAR_ERROR, SET_TOPIC, STOP_LOADING } from "./types";
import NewsContext from "./newsContext";
import newsReducer from "./newsReducer";
import axios from "axios";

const NewsState = props => {
  const initialState = {
    topic: 'Today\'\s Headlines',
    news: [],
    ts: [0],
    error: null,
    loading: false
  };

  const [state, dispatch] = useReducer(newsReducer, initialState);
  const getHeadlines = () => {
    setLoading();
    axios
      .get(`/news`)
      .then(res => {
        if (
          res.data.articles.length === 0
        ) {
          stopLoading()
        } else {
          dispatch({
            type: GET_HEADLINES,
            payload: res.data
          })
        }
      })
      .catch(err => {
        stopLoading()
        setError(err.message, "danger")
      }
    )
  };

  const getNews = (topic) => {
    setLoading();
    const abortController = new AbortController();
    const signal = abortController.signal;
    const config = {
      signal
    };
    axios
      .get(`/news/${topic}`, config)
      .then(res => {
        if (
          res.data.articles.length === 0
        ) {
          stopLoading()
          abortController.abort()
          setError(`No News for ${topic}`, "danger")
        } else {
          setTopic(topic)
          dispatch({
            type: GET_NEWS,
            payload: res.data
          })
          abortController.abort()
        }
      })
      .catch(err => {
        stopLoading()
        abortController.abort()
        setError(err.message, "danger")
      }
      )
  };

  const setTopic = (topic) => {
    dispatch({
      type: SET_TOPIC,
      payload: topic
    })
  }

  const setError = (msg, type) => {
    dispatch({
      type: SET_ERROR,
      payload: { msg, type }
    })
    setTimeout(() => {
      clearError()
    }, 5000)
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

  const stopLoading = () => {
    dispatch({
      type: STOP_LOADING
    });
  };
  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        loading: state.loading,
        error: state.error,
        topic: state.topic,
        ts: state.ts,
        setError,
        setTopic,
        getNews,
        getHeadlines
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
