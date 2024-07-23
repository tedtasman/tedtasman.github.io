import React, { useEffect, useState } from 'react';
import './App.css';
import './Homepage.css'

export function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className='Homepage-column'>
            <h3 style={{paddingTop: '2em'}}>Highlighted Posts:</h3>
            <div className='Post-grid'>
                {posts.map((post, index) => (
                    <div key={index} className='Post-square'>
                        <h4>{post.title}</h4>
                        <div className='image-container'>
                            <img src={`http://localhost:5000/${post.image_data}`} alt='Post' className='Post-image'/>
                        </div>
                        <span>{post.content}</span>
                        <span>{new Date(post.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                weekday: 'long',
                            })}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}