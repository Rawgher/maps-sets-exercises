// Quick Question #1
// What does the following code return?
new Set([1,1,2,2,3,4])
// it returns Set(4) {1, 2, 3, 4}

// ------------------------------------

// Quick Question #2
// What does the following code return?
[...new Set("referee")].join("")
// it returns 'ref'

// ------------------------------------

// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Map(2) {Array(3) => true, Array(3) => false}

// ------------------------------------

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// ------------------------------------

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowel = (char) =>  'aeiou'.includes(char);

const vowelCount = (word) => {
    const vMap = new Map();
    for (let char of word) {
        let lowerChar = char.toLowerCase();
        if (vowel(lowerChar)) {
            if (vMap.has(lowerChar)) {
                vMap.set(lowerChar, vMap.get(lowerChar) + 1)
            } else {
                vMap.set(lowerChar, 1);
            }
        }
    }
    return vMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
