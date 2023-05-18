import { Link } from "react-router-dom";
import Highlight from "./Highlight";
const blogs = [
    {
        title: "5 Effective Strategies for Boosting Your Productivity at Work",
        content: "In today's fast-paced and demanding work environment, productivity is key to achieving success and maintaining a healthy work-life balance. However, staying focused and efficient can be challenging with numerous distractions and competing priorities. In this blog post, we will explore five effective strategies that can help you boost your productivity at work. "
    },
    {
        title: "The Importance of Emotional Intelligence in Leadership",
        content: "In today's complex and ever-changing business landscape, effective leadership is not just about technical expertise and decision-making skills. Emotional intelligence (EI) has emerged as a critical attribute for successful leaders. In this blog post, we will explore the significance of emotional intelligence in leadership and how it can positively impact individuals, teams, and organizations. "
    },
    {
        title: "The Rise of Remote Work: Benefits and Challenges",
        content: "The COVID-19 pandemic has catalyzed a significant shift in the way we work, with remote work becoming the new norm for many organizations. While remote work offers numerous advantages, it also presents unique challenges. In this blog post, we will explore the benefits and challenges of remote work and provide insights into how individuals and organizations can effectively navigate this new work landscape."
    },

]

function SideBar () {
    return(
        <div className="main-side">
            {
                blogs.map((blog, index) => (
                    <Link to='/blogs' className="link">
                        <Highlight text={blog.title} id={index} />
                    </Link>
                ))
            }          
        </div>
    )
}


export default SideBar;