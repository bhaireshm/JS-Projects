
const IDs = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve([12, 54, 65, 78, 25]);
    }, 1500);

});

const getRecepie = recID => {
    return new Promise((res, rej) => {
        setTimeout(ID => {
            const recID = {
                title: "Some Pizza..",
                publisher: "Bhairesh"
            }
            res(`${ID} : ${recID.title}`);
        }, 1500, recID);
    });
}

const getPublisher = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recID = {
                title: "Some Pizza..",
                publisher: "Bhairesh"
            }
            resolve(`${pub} : ${recID.publisher}`);
        }, 1500, publisher);
    });
}

IDs.then((resolve) => {
    console.log("Succeeded.." + resolve);
    return getRecepie(resolve[1]);
})
    .then(res => {
        console.log(res);
        return getPublisher("publisherArg");
    })
    .then(res => {
        console.log("Publisher : " + res);
    })
    .catch(reject => {
        console.log('Error..!!' + reject);
    });






























