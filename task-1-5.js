const root = document.getElementById('root');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const a = document.createElement('a');

h1.textContent = 'Заголовок';
p.textContent = 'Это мой текст';
a.textContent = 'Ссылка на Яндекс';

a.href = 'https://yandex.ru';
a.target = '_blank';


root.prepend(a);
root.prepend(p);
root.prepend(h1);