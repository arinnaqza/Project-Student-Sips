const cafeBtns = document.querySelectorAll('.cafe-btn');
const cafeLists = document.querySelectorAll('.cafe-list');

let activeBtn = "wangsimni";

showCafeArea(activeBtn);

cafeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showCafeArea(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    cafeBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showCafeArea(newCafeBtn){
    activeBtn = newCafeBtn;
    cafeLists.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}
//-----------------------------POP UP PART-----------------------------

let preveiwContainer = document.querySelector('.cafe-popup');
let previewBox = preveiwContainer.querySelectorAll('.popup');

document.querySelectorAll('.cafe-container .cafe-list').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

hamburger = document.querySelector(".hamburger");
          hamburger.onclick = function(){
              navBar = document.querySelector(".nav-bar");
              navBar.classList.toggle("active");
          };