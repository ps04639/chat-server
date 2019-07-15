const db = require("../db/index");
const igsNlp = require("../utils/nlp-service");

async function getQuestionListWordBlank(pageSize = 5, currentPageNumber = 1) {
  const quesList = await db.sequelize.query(
    "execute sp_GetQuestionListWordBlank'" +
      pageSize +
      "', '" +
      currentPageNumber +
      "';"
  );
  return quesList;
}

async function updateQuestionById(questionId, words) {
  const updatedQuesById = await db.sequelize.query(
    "execute sp_UpdateQuestionById '" + questionId + "', '" + words + "';"
  );
  console.log("updatedQuesById");
  console.log(updatedQuesById);
}

async function updateQues(ctx) {
  const pageSize = ctx.query.pageSize;
  const currentPageNumber = ctx.query.currentPageNumber;
  const quesList = await getQuestionListWordBlank(pageSize, currentPageNumber);

  const qList = quesList[0];
  console.log("quesList");
  console.log(qList.length);
  for (let i = 0; i < qList.length; i++) {
    const quesId = qList[i].QuestionId;
    const ques = qList[i].QuestionText;
    console.log(quesId);
    const searchArray = igsNlp.processDataUsingNLP(ques);
    const uniqueSearchWords = igsNlp.uniqueArray(searchArray);
    // console.log("uniqueSearchWords");
    // console.log(uniqueSearchWords);
    const searchWordResultWithPipe = uniqueSearchWords.join("|");
    console.log("searchWordResultWithPipe");
    console.log(searchWordResultWithPipe);
    await updateQuestionById(quesId, searchWordResultWithPipe);
  }
  ctx.ok(qList);
}
module.exports = {
  updateQues
};
