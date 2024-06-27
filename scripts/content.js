


function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
// 使用方法
async function doSomethingAfterDelay() {
  console.log('开始');
  while (true) {
    var loading = $('#movie-loading')[0]
    if(!$.isEmptyObject(loading)){
        var loading_style = loading.getAttribute('style');
        console.log(loading_style)
        await sleep(3); // 暂停3秒
        if (loading_style == "display: none;") {
          break;
        }
    }else{
      break;
    }
  }
  var aList = $('#magnet-table').find('a');
  aList.each(function () {
    console.log($(this)[0].getAttribute('href'))
  });
  $.get('http://localhost:8082/asyncSend?path='+'1111', function(response) {
    console.log('Response:', response);
  }).fail(function(xhr, status, error) {
      console.error('An error occurred:', status, error);
  });

  console.log('结束');
}

$(document).ready(function(){
  doSomethingAfterDelay();
});






// const body = document.querySelector("#floor-nav_557");
// console.log(body)
// const lis= body.querySelectorAll("li");

// lis.forEach(function(value, index) {
//     console.log(value.textContent);
// });

// // `document.querySelector` may return null if the selector doesn't match anything.
// if (body) {
//   const text = body.textContent;
//   console.log(text)
// }
