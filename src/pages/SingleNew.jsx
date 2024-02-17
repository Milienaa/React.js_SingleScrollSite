import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleNew = () => {

    const { id } = useParams();
    
    const [oneNew, setOneNew] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                                                                .then(resp => resp.json())
                                                                .then(json => setOneNew(json))
    }, [id])

    return (
        <div>
            <h1 className="new__item">{oneNew.title}</h1>
            <p className="new__text">{oneNew.body}</p>
        </div>
    )
}

export default SingleNew;