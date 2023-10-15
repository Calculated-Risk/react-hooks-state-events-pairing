export default function MainContent({video}) {
    const{id, title, embedUrl, views, createdAt} = video

    return (
        <div>
             <iframe
                width="919"
                height="525"
                src={embedUrl}
                title="Thinking in React"
            />
             <h1>{title}</h1>
             <div><p> {views} Views | Uploaded {createdAt}</p></div>
        </div>
    );
}