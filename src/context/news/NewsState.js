import React, { useReducer } from "react";
import { GET_NEWS, SET_LOADING } from "./types";
import NewsContext from "./newsContext";
import newsReducer from "./newsReducer";
import axios from "axios";
const NewsState = props => {
  const initialState = {
    news: null,
    loading: false
  };

  const [state, dispatch] = useReducer(newsReducer, initialState);

  const getNews = () => {
    setLoading();
    const key = process.env.REACT_APP_NEWS_KEY
    const configs = {
      headers:{"x-api-key": key},
      params: {
        country: "us",
        category: "business",
        language:"en",
        page: 1
    }
    };
    axios
      .get("https://newsapi.org/v2/top-headlines", configs)
      .then(res =>
        dispatch({
          type: GET_NEWS,
          payload: res.data.articles
        })
      )
      .catch(err => {
        console.error(err);
      });
  };

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
        getNews
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
