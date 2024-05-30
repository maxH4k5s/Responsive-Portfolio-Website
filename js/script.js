// creating a portfolio tabbed component
const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-overlay");

port_btn.addEventListener("click", (e) => {
    // console.log(e.target);

    // we will get which child element was clicked
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;
    // always remove the classList first then add the class
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    // img_div.forEach((curElem) =>
    //   curElem.classList.remove("portfolio-image-active")
    // );

    p_btn_clicked.classList.add("p-btn-active");

    // to find the p-img class number of the images using the btn data attribute number

    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active);

    img_div.forEach((curElem) =>
        curElem.classList.add("p-image-not-active")
    );

    img_active.forEach((curElem) =>
        curElem.classList.remove(`p-image-not-active`)
    );
});