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