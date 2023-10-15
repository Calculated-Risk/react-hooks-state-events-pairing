export default function Comments({video}) {
    const{comments} = video;

    const commentsMappedOut = comments.map((comment) => {
        return(
           <div key={comment.id}>
                <h2>{comment.user}</h2>
                <p>{comment.comment}</p>
            </div>     
        )   
    })
    return(
        <div>
            <h1>{comments.length} Comments</h1>
            <div>{commentsMappedOut}</div>
        </div>
    )
}