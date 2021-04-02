const verifyAnswer = (correctAnswer) =>{
  return (userAnswer) => {
   return (correctAnswer.toLowerCase() === userAnswer.toLowerCase());
  }
}

console.log(verifyAnswer('ronaldo')('Ronaldx'));