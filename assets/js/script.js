document.addEventListener('DOMContentLoaded', () => {
//   //main page see more functionality
  let see_more_items = document.querySelectorAll('.see-more p');

  see_more_items.forEach((see_more) => {
    see_more.addEventListener('click', (e) => {
        array = [...e.path[2].children]
        nodes = array.filter(ele=>/to_hide/.test(ele.className))
        nodes.forEach((node) => {
            node.classList.toggle('hide');
        })
        see_more.innerText == "See More" ? see_more.innerText = "See Less" : see_more.innerText = "See More";
    });
  })
}); 
