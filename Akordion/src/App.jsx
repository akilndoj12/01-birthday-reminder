import { useState } from 'react';
import SingleQuestion from './Question.jsx';
import data from './data.js';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}></SingleQuestion>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
