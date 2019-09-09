import React, { useState, useContext } from "react";
import NewsContext from "../../context/news/newsContext";

const Form = () => {
    const newsContext = useContext(NewsContext)
    const { setTopic, setError, getNews } = newsContext
    const [state, setState] = useState('')
    
    const onChange = (e) => {
        setState(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(state.length > 0) {
            getNews(state.toLowerCase())
            setState('')
        } else {
            setError("Input a search", "danger")
        }
    }
    return (
        <form className="form-inline mx-auto" onSubmit={onSubmit}>
            <input onChange={onChange} className="form-control" type="text" placeholder="Headline" />
            <button type="submit" class="btn btn-primary form-control m-3">Search</button>
        </form>
    )
}

export default Form
