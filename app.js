document.querySelector("button").addEventListener("click", function(e) {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    document.body.style.backgroundColor = '#' + n.slice(0, 6);
    document.querySelector("span").innerText = document.body.style.backgroundColor
    console.log(document.body.style.backgroundColor)
})
