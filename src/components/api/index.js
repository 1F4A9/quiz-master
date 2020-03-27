import axios from 'axios';

export function fetchQuestions() {
  return (
    axios.get('https://opentdb.com/api.php?amount=10&category=15')
      .then(blob => blob.data.results)
      .catch(error => console.log(error)));
}