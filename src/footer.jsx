
function Footer(props) {

    return (
        <footer>
            <p>Posted by {props.authorName} </p>
            <p>{props.postDate}</p> 
        </footer>
    );
}

export default Footer;