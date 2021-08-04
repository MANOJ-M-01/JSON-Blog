const BlogData = (blogdata) => {
  var title = blogdata.title ? blogdata.title : "";
  var description = blogdata.description ? blogdata.description : "";
  var url = blogdata.url ? blogdata.url : "";
  var blogurl = blogdata.blogurl ? blogdata.blogurl : "";
  var author = blogdata.author ? blogdata.author : "";
  var published = blogdata.date ? blogdata.date : "";
  var Blogs = document.querySelector(".blog-container");
  var BlogElement = document.createElement("div");
  BlogElement.classList.add("post-container");
  BlogElement.innerHTML = `<div class="post-title">${title}</div> <a href="${blogurl}"><img src="${url}" alt="${location}"></a> <div class="post-description">${description}</div> <div class="post-details"> <div>${author}</div><div class="post-date">${published}</div> </div> `;
  Blogs.append(BlogElement);
};
export const greeting = () => {
  console.log("Hello, I have some recipe you wanna know about them?");
};
export default BlogData;
