import React from "react";
import { News } from "./card";
import './cards.css';

function PackOfNews(props) {
  const { packNews } = props;

  
  return (
    <div className="cards">
      {packNews.map(item => (
        <div className="card" key={item.id}>
                    {item.image && <img src={item.image} alt={item.webTitle} className="card-image"/>}
          <News
            webTitle={item.webTitle}
            id={item.id}
            
            sectionName={item.sectionName}
            webPublicationDate={item.webPublicationDate}
            
            webUrl={item.webUrl}
            
          />

        </div>
      ))}
    </div>
  );
}

export { PackOfNews };


