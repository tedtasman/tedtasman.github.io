import "./App.css";
import "./Homepage.css";

export function Posts() {
  const posts = [
    {
      title: "MAVez",
      content:
        "A web application designed to streamline the process of managing and visualizing data from various sources.",
      image_data: "/mavez.png",
      created_at: "2025-08-10T13:54:37.000Z",
      link: "https://github.com/UnmannedAerialSystems/MAVez",
    },
    {
      title: "ShuffleTrue",
      content:
        "A web app using the Spotify API to ensure playlists shuffle without repeats, delivering a truly random listening experience.",
      image_data: "/shuffletrue.jpg",
      created_at: "2024-07-05T13:54:37.000Z",
      link: "https://github.com/tedtasman/spotify-true-shuffle",
    },
    {
      title: "Tic-Tac-Joe",
      content:
        "A neural network powered Tic-Tac-Toe game, trained to challenge human players through reinforcement learning techniques.",
      image_data: "/joePhoto.jpg",
      created_at: "2024-05-27T13:54:37.000Z",
      link: "https://github.com/tedtasman/tic-tac-joe",
    },
  ];

  return (
    <div className="Homepage-column">
      <h3>Recent Activity:</h3>
      <div className="Post-grid">
        {posts.map((post, index) => (
          <a href={post.link} key={index} className="Post-square">
            <h4>{post.title}</h4>
            <div className="image-container">
              <img
                src={`${post.image_data}`}
                alt="Post"
                className="Post-image"
              />
            </div>
            <div className="Post-content">
              <p>{post.content}</p>
              <span>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
