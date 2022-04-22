import React from "react";

function Article(props){

    const data = props.elements;

    const highlight = (str) => {

        const regExp = /(<span class="searchmatch">)/gi;
        const regExp2 = /(<\/span>)/gi;
        const regExp3 = /(&quot)/gi;

        const text = str.replace(new RegExp(regExp, 'gi'), '');
        const text2 = text.replace(new RegExp(regExp2, 'gi'), '');
        return text2.replace(new RegExp(regExp3, 'gi'), '');

    }

    const snippet = highlight(data.snippet);

    const link = `https://en.wikipedia.org/?curid=${data.pageid}`;

    return(
        <article>
            <a href={link}>
                <h2>{data.title}</h2>
            </a>     
            <div className="snippet">{snippet}</div>
        </article>
    );
}

export default Article;