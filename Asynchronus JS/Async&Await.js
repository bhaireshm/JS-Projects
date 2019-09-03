

const getIDs = new Promise((resolve, reject) => {
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

async function getRecepieAW() {
    const IDs = await getIDs;
    //  console.log(IDs);

    const recepie = await getRecepie;
    // console.log(recepie);

    const publisher = await getPublisher;
    //console.log(publisher.publisher );
    return IDs;
}

getRecepieAW()
    .then((res) => {
        console.log(res);
        return getRecepie(res[2]);
    })
    .then((rec) => {
        console.log(rec);
        return getPublisher("Name");
    })
    .then((res) => {
        console.log(res);
    })
    ;




























