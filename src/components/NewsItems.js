import React from 'react'

const NewsItems =(props)=> {
  
    let {title,description,imgUrl,url,author,date}=props;
    return (
        <>
        <div className="card my-3 d-flex justify-content-between align-items-center" style={{width: "18rem"}}>
            <img src={imgUrl} className="card-img-top" alt=""/>
            <span className="badge bg-primary rounded-pill">{author?author.slice(0,22):"Unknown"}</span>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">On {new Date(date).toGMTString()}</small></p>
                <a href={url} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </>
    )
}
export default NewsItems;