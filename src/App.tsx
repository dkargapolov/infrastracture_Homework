import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import './App.css';

const quotes = [
  'Если день тяжёлый — сделай вид, что ты тяжелее.',
  'Ты не ленивый. Ты в режиме энергосбережения.',
  'Сегодня ты не пирожок. Сегодня ты шаурма характера.',
  'Не жди знак. Вот он.',
];

function App() {
  const [index, setIndex] = useState(0);

  const today = useMemo(() => dayjs().format('DD.MM.YYYY HH:mm'), []);

  return (
    <div style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Генератор странной мотивации</h1>
      <p>Сгенерировано: {today}</p>
      <blockquote>{quotes[index]}</blockquote>
      <button
        onClick={() => setIndex(Math.floor(Math.random() * quotes.length))}
      >
        Получить новую цитату
      </button>
    </div>
  );
}

export default App;
