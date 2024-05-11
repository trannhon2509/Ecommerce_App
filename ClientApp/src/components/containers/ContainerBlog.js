import React from "react";
import Blog from "../../components/Blog";

function ContainerBlog() {
  const blogs = [
    {
      date: "September.15.2021",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
      title: "Energy Drink Which You Can Make At Home."
    },
    {
      date: "September.15.2021",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
      title: "Energy Drink Which You Can Make At Home."
    },
    {
      date: "September.15.2021",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
      title: "Energy Drink Which You Can Make At Home."
    },
    {
      date: "September.15.2021",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
      title: "Energy Drink Which You Can Make At Home."
    },
    
    // Add more blog objects here
  ];

  return (
    <div className="container">
      <div className="row">
        {blogs.map((blog, index) => (
          <Blog
            key={index}
            date={blog.date}
            content={blog.content}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ContainerBlog;
