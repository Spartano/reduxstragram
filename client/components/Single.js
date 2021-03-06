import React from "react";
import Photo from "./Photo";
import Comments from  "./Comments"

const  Single = React.createClass({
  render(){
    //index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
    //get us the post
    const post = this.props.posts[i];
    //get us the comments
    const postComments = this.props.comments[this.props.params.postId] || [];

    return(
      <div className="single-photo">
          <Photo {...this.props} key={i} i={i} post={post}/>
          <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
})

export default Single
