import React from "react";

const  NewsItem =(props)=>{
  
    let {
      myTitle,
      description,
      imageUrl,
      newsUrl,
      source,
      author,
      timeUpdate,
    } = props;
    return (
      <div>
        <div className="card">
          <div style={{ position: "absolute", right: "0", top: "0" }}>
            <span
              className=" badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}{" "}
            </span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://w0.peakpx.com/wallpaper/205/620/HD-wallpaper-messi-cute-messi-cute-argentina-messi-2021-messi-argentina-messi-2018-messi-argentina-thumbnail.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{myTitle}</h5>
            <p className="card-text">
              <small className="text-body-secondary">
                {author} Last-Updated {new Date(timeUpdate).toUTCString()}
              </small>
            </p>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}


export default NewsItem;