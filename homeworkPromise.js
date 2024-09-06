const makeAllCaps = (words) => new Promise((resolve, reject) => {
    if (words.some(word => typeof word !== 'string')) {
        reject('Tidak semua elemen di array bertipe data string!');
    }

    resolve(words.map(word => word.toUpperCase()));
})

const sortWords = (words) => new Promise((resolve, reject) => {
    if (words.some(word => typeof word !== 'string')) {
        reject('Tidak semua elemen di array bertipe data string!');
    }

    resolve(words.sort());
})

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then((result) => sortWords(result))
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
