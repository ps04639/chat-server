var pos = require("pos");
var natural = require("natural");
var nounInflector = new natural.NounInflector();
var pluralize = require("pluralize");
const igsNlp = require("../utils/nlp-service");

const db = require("../db/index");

function hasWhiteSpace(s) {
  return s.indexOf(" ") >= 0;
}

async function getQuestionListWordBlank(pageSize = 5, currentPageNumber = 1) {
  const quesList = await db.sequelize.query(
    "execute sp_GetQuestionListWordBlank'" +
      pageSize +
      "', '" +
      currentPageNumber +
      "';"
  );
  console.log("quesList");
  console.log(quesList);
}

async function updateQuestionById(questionId, words) {
  const updatedQuesById = await db.sequelize.query(
    "execute sp_UpdateQuestionById '" + questionId + "', '" + words + "';"
  );
  console.log("updatedQuesById");
  console.log(updatedQuesById);
}

async function getUsers(pageSize, currentPageNumber) {
  const updatedQuesById = await db.sequelize.query(
    "execute sp_GetUsers  '" + pageSize + "', '" + currentPageNumber + "';"
  );
  console.log("updatedQuesById");
  console.log(updatedQuesById);
}

async function getResponse(ctx) {
  const textInput = hasWhiteSpace(ctx.query.inputText)
    ? ctx.query.inputText + "?"
    : ctx.query.inputText;
  const quesIdInput = ctx.query.questionId;
  const userIdInput = ctx.query.userId;
  const ipAddressInput = ctx.query.ipAddress;
  // TODO using nlp | separated words
  //const searchWordInput = ctx.query.searchWord;
  var searchWordInput = "";

  // procedure call
  console.log("Query parameter sp_GetResponse");
  console.log("textInput = ", textInput);
  console.log("quesIdInput = ", quesIdInput);
  console.log("userIdInput = ", userIdInput);
  console.log("ipAddressInput = ", ipAddressInput);
  var quesId = parseInt(quesIdInput, 10);
  console.log("If quesId = ", typeof quesId);
  if (quesId === 0) {
    // } else {
    console.log("If quesIdInput = ", quesIdInput);
    const searchArray = igsNlp.processDataUsingNLP(textInput);
    const uniqueSearchWords = igsNlp.uniqueArray(searchArray);
    const synonymsArray = igsNlp.getSynonyms(uniqueSearchWords);
    // console.log("array");
    // console.log(synoArray);
    // synoArray.push(synoArray);
    // console.log("synonymValue");
    // console.log(synonymValue);
    // console.log("uniqueSearchWords");
    // console.log(uniqueSearchWords);
    const singPluralArray = igsNlp.getSingularPlural(uniqueSearchWords);
    const res = [...synonymsArray, ...singPluralArray];
    console.log("result");
    console.log(res);
    const searchWordResultWithPipe = res.join("|");
    // console.log("After join ");
    // console.log(arr3);
    console.log("searchWordResultWithPipe");
    console.log(searchWordResultWithPipe);
    searchWordInput = searchWordResultWithPipe;
  }
  console.log("searchWordInput = ", searchWordInput);
  ctx.res.setHeader("Access-Control-Allow-Origin", "*");
  await db.sequelize
    .query(
      "execute sp_GetResponse '" +
        textInput +
        "', '" +
        quesIdInput +
        "', '" +
        userIdInput +
        "','" +
        ipAddressInput +
        "','" +
        searchWordInput +
        "';"
    )
    .then(function(response) {
      ctx.ok(response[0]);
    })
    .error(function(err) {
      res.json(err);
    });
}

module.exports = {
  getResponse
};
