const submit = document.getElementById("submit");
const input = document.getElementById("palindrome").value;
const answer = document.getElementById("answer");

submit.onclick = () => {
  let result = input.split('').filter((char) => /[a-zA-Z0-9]/.test(char)).join('');
  let invertedResult = result.split('').reverse().join('');

  if (invertedResult === result) {
    answer.innerText = `${input} is a palindrome`;
  }
  else {
    answer.innerText = `${input} is not a palindrome`;
  }
};