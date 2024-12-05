function letterFrequencyCounter(text) {
  const letters = text.toLowerCase().replace(/\s+/g, "");
  const frequencyMap = {};

  for (let letter of letters) {
    if (letter) {
      frequencyMap[letter] = (frequencyMap[letter] || 0) + 1;
    }
  }

  return frequencyMap;
}

function bigramFrequencyCounter(text) {
  const letters = text.toLowerCase().replace(/\s+/g, "");
  const frequencyMap = {};

  for (let i = 0; i < letters.length - 1; i++) {
    const bigram = letters[i] + letters[i + 1];
    frequencyMap[bigram] = (frequencyMap[bigram] || 0) + 1;
  }

  return frequencyMap;
}

function anagramGrouping(list) {
  const groups = {}; // Hash map to store groups of anagrams

  for (let word of list) {
    // Loop through each word
    // Step 1: Normalize the word by sorting its letters alphabetically
    const sorted = word.split("").sort().join("");

    // Step 2: Check if this normalized form exists in the hash map
    if (!groups[sorted]) {
      groups[sorted] = []; // Create a new group if it doesn't exist
    }

    // Step 3: Add the word to the appropriate group
    groups[sorted].push(word);
  }

  // Step 4: Extract all groups of anagrams as an array
  return Object.values(groups);
}

var groupAnagrams = function (strs) {
  let anagrams = {};

  for (let word of strs) {
    const sorted = word.split("").sort().join("");

    if (!anagrams[sorted]) {
      anagrams[sorted] = [];
    }

    anagrams[sorted].push(word);
  }

  return Object.values(anagrams);
};

// let textExample = "Hola soy felipe";
// let count = bigramFrequencyCounter(textExample);
// console.log(count);

let words = [
  "listen",
  "silent",
  "enlist",
  "inlets",
  "stone",
  "notes",
  "tones",
  "hello",
];
// const groupedAnagrams = anagramGrouping(words);
// console.log(groupedAnagrams);

function groupPalindromes(list) {
  // Input is an array of words
  let result = { Palindromes: [], Nonpalindromes: [] };

  // For loop that goes through each word of the array
  for (let word of list) {
    // Create the palidrome of the word, compare to original word
    const palindrome = word.split("").reverse().join("");

    if (palindrome === word) {
      // If they are equal, add to palindrome group
      result["Palindromes"].push(word);
    } else {
      // Else add to non palidrome group
      result["Nonpalindromes"].push(word);
    }
  }
  // Returns a Hash table of arrays, containing palindromes and non palindromes grouped
  return result;
}

let words2 = ["level", "radar", "world", "deified", "hello", "civic", "java"];
const groupedAnagrams = groupPalindromes(words2);
console.log(groupedAnagrams);

var canConstruct = function (ransomNote, magazine) {
  // Define hash table called frequency map
  const frequencyMap = {};

  // No need to organize letters

  for (let letter of magazine) {
    frequencyMap[letter] = (frequencyMap[letter] || 0) + 1;
  }

  // Create for loop, what goes through each letter of ramsonNote
  for (let letter of ransomNote) {
    if (!frequencyMap[letter] || frequencyMap[letter] === 0) {
      return false;
    }
    frequencyMap[letter]--;
  }

  return true;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const frequencyMap = {};

  for (let letter of s) {
    frequencyMap[letter] = (frequencyMap[letter] || 0) + 1;
  }

  for (let letter of t) {
    if (!frequencyMap[letter] || frequencyMap[letter] === 0) {
      return false;
    }

    frequencyMap[letter]--;
  }

  return true;
};
