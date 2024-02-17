import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewsPage = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
                                                            .then(response => response.json())
                                                            .then(json => setNews(json))
    }, [])

    

    return (
        <div>
            <h1>News Page</h1>
            {news.map((elem) =>
                <Link className="new__title" key={elem.id} to = {'/news/' + elem.id}>
                                    {elem.title}
                                </Link>)}
        </div>
    )
}

export default NewsPage;