import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDoList = ['Estudar', 'Descansar', 'Trabalhar', 'Dormir'];

function App() {
  return (
    <ul>
      {toDoList.map((element) => task(element))}
    </ul>
  );
}

export default App;
