document.querySelector("#btn_scroll_down").addEventListener("click", () => {
    gsap.to(window, { duration: 1.5, scrollTo: ".skill" })
})