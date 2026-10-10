import React from 'react';
import Image, { type ImageProps } from 'next/image';
import "./article.css"
type ArticleProps = {
  imgUrl: ImageProps['src'];
  date: React.ReactNode;
  text: React.ReactNode;
};

const Article = (props: ArticleProps) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <Image className='w-full h-full rounded-md' src={props.imgUrl} alt="" />
      </div>
      <div className="gpt3__blog-container_article-content">
      <div>
        <p>{props.date}</p>
        <h3>{props.text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
    </div>
  );
};

export default Article;
