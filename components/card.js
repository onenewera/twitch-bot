export default function Card() {
    return (
        <div className="card">
            <span className="card-position">1</span>
            <div className="card-image">IMG</div>
            <div className="card-details">
                <span className="song-title">IGOR</span>
                <span className="song-author">Tyler, the creator</span>
                <span className="song-duration">6:35</span>
            </div>
            <div className="chat-likes-container">
                <span className="chat-image"></span>
                <span className="chat-name">joeyp</span>
                <span className="chat-likes">
                    <span className="like-icon">
                        <svg width="12px" height="12px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path></svg>
                    </span>
                    <span className="like-number">4</span>
                </span>
            </div>
        </div>
    )
}