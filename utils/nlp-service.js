var pos = require("pos");
var natural = require("natural");
var nounInflector = new natural.NounInflector();
var pluralize = require("pluralize");
var synonyms = require("synonyms");

// return array of verb, noun, adjective
function processDataUsingNLP(text) {
  const input = text;
  var words = new pos.Lexer().lex(input);
  var tagger = new pos.Tagger();
  // usnig pos npm pkg get grammer tags
  var taggedWords = tagger.tag(words);
  var verbs = [],
    nouns = [],
    adjective = [],
    searchWordResult = [];

  for (let i = 0; i < taggedWords.length; i++) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    if (
      tag.indexOf("VB") > -1 ||
      tag.indexOf("VBD") > -1 ||
      tag.indexOf("VBG ") > -1 ||
      tag.indexOf("VBN") > -1 ||
      tag.indexOf("VBP") > -1 ||
      tag.indexOf("VBZ") > -1
    ) {
      if (word !== "is" || word !== "do") {
        verbs.push(word);
        searchWordResult.push(word);
      }
    }
    if (
      tag.indexOf("NN") > -1 ||
      tag.indexOf("NNP") > -1 ||
      tag.indexOf("NNPS") > -1 ||
      tag.indexOf("NNS") > -1 ||
      tag.indexOf("VBN") > -1 ||
      tag.indexOf("VBN") > -1
    ) {
      nouns.push(word);
      searchWordResult.push(word);
    }
    if (
      tag.indexOf("JJ") > -1 ||
      tag.indexOf("JJR") > -1 ||
      tag.indexOf("JJS") > -1
    ) {
      adjective.push(word);
      searchWordResult.push(word);
    }
  }

  return searchWordResult;
}

function uniqueArray(inputArray) {
  // unique
  Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (!arr.includes(this[i])) {
        arr.push(this[i]);
      }
    }
    return arr;
  };
  return inputArray.unique();
}

function getSingularPlural(uniqueSearchWords) {
  let pluralWords = [],
    singularWords = [];
  uniqueSearchWords.forEach(element => {
    if (pluralize.isSingular(element)) {
      singularWords.push(element);
      pluralWords.push(nounInflector.pluralize(element));
    }
    if (pluralize.isPlural(element)) {
      pluralWords.push(element);
      singularWords.push(nounInflector.singularize(element));
    }
  });
  // console.log("singularWords");
  // console.log(singularWords);
  // console.log("pluralWords");
  // console.log(pluralWords);
  // const arr3 = [...pluralWords, ...singularWords];
  return [...pluralWords, ...singularWords];
}
function getSynonyms(uniqueSearchWords) {
  let synoArray = [];

  uniqueSearchWords.forEach(element => {
    const synonymValue = synonyms(element);
    if (typeof synonymValue !== "undefined") {
      if (typeof synonymValue.n !== "undefined") {
        synoArray = [...synonymValue.n];
      }
      if (typeof synonymValue.v !== "undefined") {
        synoArray = [...synonymValue.v];
      }
    }
  });
  return synoArray;
}
module.exports = {
  uniqueArray,
  processDataUsingNLP,
  getSingularPlural,
  getSynonyms
};
