const Pagination = (totalpage, curpage) => {
    var PageContaine = document.querySelector('.pagination-container');
    for (var i = 1; i <= totalpage; i++) {
        var pagebox = document.createElement('a');
        pagebox.classList.add('page-box');
        pagebox.href = `./?page=${i}`;
        pagebox.innerHTML = `${i}`;
        if (curpage == i) {
            pagebox.classList.add('active-page');
        }
        PageContaine.append(pagebox);
    }
};
export default Pagination;