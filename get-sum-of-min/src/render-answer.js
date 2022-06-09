const renderAnswer = (cb) => {

  const container = document.querySelector('.container');
  const input = document.querySelector('.input');
  const form = document.querySelector('.form');
  const answer = document.createElement('div');
  answer.className = 'answer';
  container.appendChild(answer);
  input.focus();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const arr = input.value.split(',')
    const minSum = cb(arr);
    if(minSum === null) {
      answer.classList.add('danger');
      answer.innerText = 'Данное выражение не может быть обработано.';
    } else {
      answer.classList.remove('danger');
      answer.innerHTML = `Сумма двух минимальных чисел равна <strong>${minSum}</strong>`;
    }
    input.value = '';
    input.focus();
  });
  
};

module.exports = renderAnswer;