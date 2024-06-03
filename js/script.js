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


// swiper slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// scroll to top button
const heroSection = document.querySelector(".section-hero")
const footerElem = document.querySelector(".section-footer")
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" })
}

scrollElement.addEventListener("click", scrollTop);


// counter number
const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;

counterNum.forEach((curElem) => {
    const updateNum = () => {
        const targetNum = parseInt(curElem.dataset.number);
        // console.log(targetNum);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum)
        const incrementNumber = Math.trunc(targetNum / speed);
        if (initialNum < targetNum) {
            curElem.innerText = `${initialNum + incrementNumber}+`;
            setTimeout(updateNum, 10);
        }
    };

    updateNum();
})