import BlogData, { greeting as greet } from "./posts.js";
import Pagination from "./pagination.js";
var currentPage = window.location.search.substr(1);
var page = currentPage.split("=");
var PageNo = parseInt(page[1]);
var PageNo = PageNo ? PageNo : 1;
const viewBlog = (blogdatas) => {
  blogdatas.forEach((blogdata) => {
    BlogData(blogdata);
  });
  greet();
};
axios.get("./blog.json")
  .then((response) => {
    var datas = response.data;
    var blogdatas = datas["page_" + PageNo];
    viewBlog(blogdatas);
    var TotalPage = datas["total_pages"];
    Pagination(TotalPage, PageNo);
  })
  .catch((err) => {
    console.log(err);
  });
