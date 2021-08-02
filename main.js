import slider, { greeting as greet } from "./module.js";
import blog from "./blog.json" assert { type: "json" };
var blogdatas = blog.data;
blogdatas.forEach((blogdata) => {
    slider(blogdata);
});
greet();
