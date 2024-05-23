import React, { useState } from "react";
const ReadMore = ({ children }) => {
    const btn = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="btn btn-danger">{isReadMore ? btn.substring(0, 100) : btn}<button onClick={toggleReadMore}>{isReadMore ? "...Read More" : " Show Less"} </button></p>
    );
};
const Content = () => {
    return (
        <div className="container">
            {/* <h2> */}<ReadMore>
                GeeksforGeeks: A Computer Science portalfor geeks. It contains well written,well thought and well explained computer
                science, programming articles andquizzes. It provides a variety ofservices for you to learn, so thrive and
                also have fun! Free Tutorials, Millions of Articles, Live, Online and Classroom
                Courses ,Frequent Coding Competitions, Webinars by Industry Experts, Internship opportunities, and Job Opportunities.Knowledge is power!
            </ReadMore>{/* </h2> */}
        </div>
    );
};
export default Content;
