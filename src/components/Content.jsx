import './content.css'

function MainContent(props) {
    return (
        <div className='main'>
            <div className="main-content">
                    <h2>{props.postTitle}</h2>
                    <p>{props.postContent}</p>
            </div>
            <div className="main-side">
                <h2>{props.postHighTitle}</h2>
                <p>{props.postHighContent}</p>
                
            </div>
        </div>
    );
}

export default MainContent;
