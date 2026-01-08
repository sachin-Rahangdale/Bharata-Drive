import React from 'react'
import { useNavigate } from 'react-router-dom';

type NewCardProps = {
    id: Number;
    title: string;
    image:string;
    category:string;
    date:string;
    summary:string;
    
}

const NewsCard = ({id,title,image,category,date,summary}:NewCardProps) => {
    const navigate = useNavigate();
  return (
<div onClick={() => navigate(`/news/${id}`)}>

        <img src = {image} alt={title}/>
        <div>
            <span>{title}</span>
            <p>{summary}</p>
            <small>{date}</small>
        </div>

    </div>
  )
}

export default NewsCard