import React, { Component } from 'react';
import Rainbow from '../hoc/Rainbow'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    //fetching now using redux to create 

    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             })
    //         })
    // }
    render() {
        console.log(this.props)
        const { posts } = this.props
        console.log('posts', posts)
        const postList = posts.length ? (posts.map(post => {
            return (
                <div className="home post card" key={post.id}>
                    <img src={Pokeball} alt="Poke ball"/>
                    <div className="card-content">
                        <Link to={'/'+post.id}>
                        <span className="card-title red-text">
                            {post.title}
                        </span>
                        </Link>
                        <p>
                            {post.body}
                        </p>
                    </div>

                </div>
            )
        }) ) : (<div className="center"> No post yet </div>)
        return (
            <div className="container">
            <h2 className="center red-text">Home </h2>
            {postList}
        </div>

                
          
        );
    }

}
 
const mapStateToProps = (state ) => {
    return {
        posts: state.posts
    }
  }
export default connect(mapStateToProps)(Rainbow(Home));