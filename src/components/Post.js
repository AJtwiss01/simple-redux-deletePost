import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'

class Post extends Component {
    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     console.log(this.props.match.params)
    //     let id = this.props.match.params.post_id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             console.log('post', res.data)
    //             this.setState({
    //                 post: res.data
    //             })

    //         })
    // }
    handleClick = () => {
        const { deletePost, post, history}  = this.props
        deletePost(post.id)
        history.push('/')
    }
    render() {
        console.log("these are props", this.props)
        const { post } = this.props
        const signlePost = post ? (
            <div className="post">
                <h3 className="center">{post.title}</h3>
                <p>{post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading .....</div>
        )

        return (
            <div className="container">
            { signlePost }
            </div>
        );
    }
}
const matchStateToProps = (state, ownProps) => {
 let id = ownProps.match.params.post_id
 return {
     post: state.posts.find(post => {
         return post.id === id 
     })
 }
}
const matchDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}
export default connect(matchStateToProps, matchDispatchToProps)(Post);