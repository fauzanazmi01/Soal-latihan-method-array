const collectionNumber = [1, 2, 3, 4, 5, 6]
/**
 * Manipulasi array sederhana
 * Buat array baru berisi angka2 yg merupakan hasil perkalian 3 dari setiap element array collectionNumber
 */

const newCollection = collectionNumber.map((val, idx, arr) => val * 3)
console.log("New number collection:", newCollection)


const colors = ["blue", "black", "purple", "white", "pink"]
/**
 * buat array baru yang isinya element yang hurufnya lebih dari 4 berdasarkan array colors
 */

const newColors = colors.filter((val, idx, arr) => val.length > 4)
console.log("New colors:", newColors)
