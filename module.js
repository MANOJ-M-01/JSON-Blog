const slider = (blogdata) => {
  var title = blogdata.title ? blogdata.title : "";
  var description = blogdata.description ? blogdata.description : "";
  var url = blogdata.url ? blogdata.url : "";
  var blogurl = blogdata.blogurl ? blogdata.blogurl : "";
  var author = blogdata.author ? blogdata.author : "";
  var published = blogdata.date ? blogdata.date : "";
  var slider = document.querySelector(".slider");
  var slidertag = document.createElement("div");
  slidertag.classList.add("slider-container");
  slidertag.innerHTML = `<div class="slider-title">${title}</div> <a href="${blogurl}"><img src="${url}" alt="${location}"></a> <div class="slider-description">${description}</div> <div class="post-details"> <div>${author}</div><div class="post-date">${published}</div> </div> `;
  slider.append(slidertag);
};
export const greeting = () => {
  console.log("Hello y'll i have some Foods you wanna know about them!");
};
export default slider;
