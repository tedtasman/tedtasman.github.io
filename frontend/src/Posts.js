import './App.css';
import './Homepage.css'

export function Posts() {
    
    const posts = [
        {
            title: 'PSU SNAPS Website',
            content: 'Check out the website I\'ve developed for for the Penn State Student Nurses Association of Pennsylvania!',
            image_data: './content/snaps.png',
            created_at: '2024-10-03T13:54:37.000Z'
        },
        {
            title: 'Tic-Tac-Joe',
            content: 'I created and trained a neural network to play Tic-Tac-Toe against a human player. Check out the code on my GitHub!',
            image_data: './content/joePhoto.jpg',
            created_at: '2024-07-05T13:54:37.000Z'
        },
        {
            title: 'Scheduler App',
            content: 'I developed a college course scheduling app using Java and SQL.',
            image_data: './content/scheduler.jpg',
            created_at: '2021-09-21T13:54:37.000Z'
        }
    ]

    return (
        <div className='Homepage-column'>
            <h3>Recent Activity:</h3>
            <div className='Post-grid'>
                {posts.map((post, index) => (
                    <div key={index} className='Post-square'>
                        <h4>{post.title}</h4>
                        <div className='image-container'>
                            <img src={require(`${post.image_data}`)} alt='Post' className='Post-image'/>
                        </div>
                        <div className='Post-content'>
                            <p>{post.content}</p>
                            <span>{new Date(post.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    weekday: 'long',
                                })}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}