
function Footer() {
    const currentDate = new Date().toLocaleDateString();
    return (
        <footer>
            <p>Posted by Ivy Mbogo</p>
            <p>{currentDate}</p> 
        </footer>
    );
}

export default Footer;
