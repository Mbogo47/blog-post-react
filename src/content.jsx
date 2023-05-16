function MainContent(props) {
    return (
            <main>
                <article>
                    <h2>{props.postTitle}</h2>

                    {/* <img src={props.imageSrc} alt={props.imageAlt} /> */}
                    <p>{props.postContent}</p>
                </article>
            </main>
    );
}

export default MainContent;
