export function Post(props) {
    return(
        <div>
            <span>
                {props.author}
            </span> 
            <span>
                {props.content}
            </span> 
        </div>
    )
}