

let YOB = [1997, 1990, 2005, 1980];

function isFullAge() {
    //    console.log(arguments);

    var newArr = Array.prototype.slice.call(arguments);

    newArr.forEach(function (cur) {
        console.log((2019 - cur) >= 18);
    })
}

//isFullAge(1997, 1990, 2005, 1980);

// function isFullAge2(...YOB){
//    // console.log(YOB);
//     YOB.forEach(cur => {
//         console.log((2019 - cur) >= 18);
//     })

// }
// isFullAge2(1997,1998,2015);

function isFullAge3(limit, ...YOB) {
    // console.log(YOB);
    YOB.forEach(cur => {
        console.log((2019 - cur) >= limit);
    })

}
isFullAge3(16, 1997, 1998, 2015);






























