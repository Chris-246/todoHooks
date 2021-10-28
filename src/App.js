import React, { useState } from 'react';
import './App.css';

// Ce qui est en commentaire c'est ce que j'ai fait seul quand la dame de la vidéo a dit : I will let you exercise and do delete action
// j'ai laissé cette partie en commentaire pour pouvoir suivre la vidéo et faire les changements qu'elle proposait

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const onAdd = (e) => {
    e.preventDefault();
    const itemToAdd = {
      id: new Date().getTime(),
      text: value,
      isCompleted: false,
    }
    setItems(items.concat(itemToAdd));
    setValue('');
  }

  const onChange = e => {
    setValue(e.target.value);
  }

  // const deleteItem = () => {
  //   const filtered = items.filter(i => {return !i.isCompleted});
  //   setItems(filtered);
  // }

  const onDelete = id => {
    // eslint-disable-next-line array-callback-return
    const filtered = items.filter(item => {
      if (item.id !== id) { return item };
    });
    setItems(filtered);
  }

  // const toggleCompleted = (id) => {
  //   const newList = items.map(item => {
  //     if (id === item.id) {
  //       return {
  //         ...item,
  //         isCompleted: !item.isCompleted,
  //       }
  //     } else {
  //       return item;
  //     }
  //   });
  //   setItems(newList);
  // }
  return (
    <div className="App">
    <form onSubmit={(e) => {
      onAdd(e);
    }}>
      <input type="text" value={value} onChange={
        (e) => onChange(e)
      }/>
    </form>
    <ul>
      {items.map(item => {
        return(
          <li key={item.id} onClick={() => onDelete(item.id)} style={{
            color: item.isCompleted ? 'red' : 'green'
          }} >{item.text}</li>
        )
      })}
    </ul>
    {/* <button onClick={() => deleteItem()}>Remove Completed</button> */}
    </div>
  );
}

export default App;
