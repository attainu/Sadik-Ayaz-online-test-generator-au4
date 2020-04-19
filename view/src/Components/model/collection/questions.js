export default class Questions {
    constructor(arrayOfQuestions) {
      this.result={};
        this.questions = arrayOfQuestions.map((question)=>{
          const questionId=question._id;
          this.result[questionId] = "";
          return {question: question};
         });
      }

    setResult(questionId, result){
      this.result[questionId] = result;
    }
  
    getQuestions() {
      return this.questions;
    }

    getResult(){
      return this.result;
    }

    updateAnswerOf(index, answer){
      this.result[index].answer = answer;
      return this.result;
    }

  }