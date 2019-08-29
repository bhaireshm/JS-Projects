//let boxes = document.querySelectorAll('.box');
//
//console.log(boxes);
//
//const boxAr = Array.prototype.slice.call(boxes);
//
//boxAr.forEach(function (ele) {
//    ele.style.backgroundColor = 'pink';
//});

Array.from(document.querySelectorAll('.box')).forEach( ele => {
    ele.style.backgroundColor = 'red';
})


