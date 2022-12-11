// const arrayE = [
//     {
//       name: "Product 1",
//       price: 1000,
//       stock: 10
//     },
//     {
//       name: "Product 2",
//       price: 2000,
//       stock: 20
//     },
//   ];

// console.log(arrayE);

// function solution(array) {
//     return array.map(producto => ({      
//         ...producto,
//         taxes: Math.round(producto.price * .19)      
//     }));
// }; 

// console.log(solution(arrayE));


// function solution(word, query) {
//    return word.toLowerCase().includes(query);
// }; 


// console.log(solution("Ana lava la tina", "ana"))
// console.log(solution("Santiago", "tiago"))
// console.log(solution("Nicolas", "ana"))


// function solution(numbers) {
//     let suma = 0;
//     numbers.forEach(num => {
//         suma += num
//     })
//     return suma;
// }; 

// console.log(solution([1, 1, 1]))
// console.log(solution([2, 4, 8]))

// const fruits = () => { 
//     if (true) { 
//         var fruit1 = 'apple'; 
//         const fruit2 = 'banana'; 
//         let fruit3 = 'kiwi'; 
//     } 
// }

// const ovejas = [
//     { name: 'Noa', color: 'azul' },
//     { name: 'Euge', color: 'rojo' },
//     { name: 'Navidad', color: 'rojo' },
//     { name: 'Ki Na Ma', color: 'rojo'},
//     { name: 'AAAAAaaaaa', color: 'rojo' },
//     { name: 'Nnnnnnnn', color: 'rojo'}
// ]

// function contarOvejas(ovejas = []) {
//     const canPass = (oveja) => {
//         return (
//             oveja.name.toLowerCase().includes('n') 
//             && oveja.name.toLowerCase().includes('a') 
//             && oveja.color === 'rojo'
//         );
//     }
    
//     return ovejas.filter( oveja => (canPass(oveja) ? oveja : false ));
// }

// console.log( contarOvejas(ovejas));


// ==========================  
// A millionaire bought a social network, and he doesn't bring good news. He has announced that each time an employee misses a working day due to a holiday, they will have to compensate it with two extra hours another working day of the same year.
// Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.
// Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.
// Given a year and an array with the dates of the holidays, return the number of extra hours that would be done during that year:

// const year = 2022
// const holidays = ['01/06', '04/01', '12/25']

// function countHours(year, holidays = []) {

//     const extraHours = holidays.filter( day => {
//         const numerDay = new Date(`${day}, ${year}`);
//         const validation = numerDay.getDay() >= 1 && numerDay.getDay() <= 5
//         if( validation ) return day  
//     });

//     return extraHours.length * 2;
// }

// console.log(countHours(year, holidays))
// console.log(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']))

// console.log(countHours(2000, ['01/01']))


// You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. Each gift inside the pack is represented by a string and it has a weight equal to the number of letters in its name. Santa Claus's sleigh can only carry a weight limit.
// Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a maximum weight limit that it can carry. The maximum weight limit of each reindeer is equal to twice the number of letters in its name.
// Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. You can't split gifts packs.


// const packOfGifts = ["book", "doll", "ball"]
// const reindeers = ["dasher", "dancer"]

// function distributeGifts(packOfGifts, reindeers) {
    
//     let totalGiftWeight = 0;
//     let totalMWL = 0;

//     packOfGifts.forEach( gift => totalGiftWeight = totalGiftWeight + gift.length )
//     reindeers.forEach( reindeer => totalMWL = totalMWL + reindeer.length )

//     return Math.floor((totalMWL*2) / totalGiftWeight )

// }

// console.log(distributeGifts(packOfGifts, reindeers ))
// console.log(distributeGifts(['a', 'b', 'c'], ['d', 'e']))
// console.log(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))
// console.log(distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))




// function fitsInOneBox(boxes = []) {

//     const fits = ({l:l1, w:w1, h:h1}, {l:l2, w:w2, h:h2})  => (l1 > l2 && w1 > w2 && h1 > h2) || (l2 > l1 && w2 > w1 && h2 > h1);
//     var itFits = true;

//     for (let i = 0; i < boxes.length - 1; i++){
//         const theBoxesFits = fits(boxes[i], boxes[i+1]);

//         if(!theBoxesFits){
//             itFits = false;
//             break;
//         }

//     }


//     return itFits;
// }

// console.log( fitsInOneBox([
//     { l: 1, w: 1, h: 10 },
//     { l: 3, w: 3, h: 12 },
//     { l: 2, w: 2, h: 1 },
// ]))

// console.log(fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 3, w: 3, h: 3 },
//     { l: 2, w: 2, h: 2 }
// ]))

// console.log(fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 2, w: 2, h: 2 },
//     { l: 2, w: 10, h: 2}
// ]))


function checkPart(part) {
    const re = /[\u0300-\u036f/ /]/g;
    let lowRegStr = part.toLowerCase().replace(/ /g, "");
    let reverseStr = lowRegStr.split('').reverse().join('');
    
    let different = ''
    
    lowRegStr.split('').forEach( (letter, index) => {
        
        if( letter !== reverseStr[index] ){
            if( index !== 0 && different === ''){
                different = letter
            }else if(index === 0 && different === '' ) {
                console.log(letter)
                different = reverseStr[index]
            }
        }

    });
    
    return reverseStr.replace(different, '') === lowRegStr.replace(different, '')
  }

// console.log(checkPart("yolooloy"))
console.log(checkPart("zzzoonzzz"))
// console.log(checkPart("miidim"))
console.log(checkPart("oossooi"))
// console.log(checkPart("ligar es ser agil"))
console.log(checkPart("radada"))
