import React, { useState, useContext } from "react";
import NewsContext from "../../context/news/newsContext";

const Form = () => {
    const newsContext = useContext(NewsContext)
    const { setTopic, setError } = newsContext
    const [state, setState] = useState('')
    
    const onChange = (e) => {
        setState(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(state.length > 0) {
            setTopic(state.toLowerCase())
            setState('')
        } else {
            setError("Input a search", "danger")
        }
    }
    return (
        <form className="form-inline" onSubmit={onSubmit}>
            <input onChange={onChange} className="form-control mx-auto" type="text" placeholder="search" />
            <button type="submit" class="btn btn-primary form-control mx-auto">Search</button>
        </form>
    )
}

export default Form
