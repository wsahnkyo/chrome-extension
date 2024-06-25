const body = document.querySelector("#floor-nav_557");
console.log(body)
const lis= body.querySelectorAll("li");

lis.forEach(function(value, index) {
    console.log(value.textContent);
});

// `document.querySelector` may return null if the selector doesn't match anything.
if (body) {
  const text = body.textContent;
  console.log(text)
}

// 打开一个新窗口或标签，并导航到指定的URL
window.open('https://www.baidu.com?'+lis[0].textContent, '_blank');