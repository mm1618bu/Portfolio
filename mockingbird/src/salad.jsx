// SaladBuilder.jsx
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Define the types of draggable items
const ItemTypes = {
  INGREDIENT: 'ingredient',
};

// Ingredient component that can be dragged
const Ingredient = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.INGREDIENT,
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        margin: '4px',
        backgroundColor: 'lightgreen',
        cursor: 'move',
      }}
    >
      {name}
    </div>
  );
};

// Salad Bowl component where ingredients can be dropped and displayed
const SaladBowl = ({ salad, onDrop, onRemove }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT,
    drop: (item) => onDrop(item.name),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: '300px',
        width: '300px',
        border: '2px dashed gray',
        backgroundColor: isOver ? 'lightyellow' : 'white',
        padding: '16px',
      }}
    >
      <h3>Salad Bowl</h3>
      <ul>
        {salad.map((ingredient, index) => (
          <li
            key={index}
            onClick={() => onRemove(index)}
            style={{
              cursor: 'pointer',
              padding: '4px',
              backgroundColor: 'lightcoral',
              margin: '2px',
            }}
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main component
const Salad = () => {
  const [salad, setSalad] = useState([]);

  const handleDrop = (ingredient) => {
    setSalad((prevSalad) => [...prevSalad, ingredient]);
  };

  const handleRemove = (index) => {
    setSalad((prevSalad) => prevSalad.filter((_, i) => i !== index));
  };

  const ingredients = ['Lettuce', 'Tomato', 'Cucumber', 'Carrot', 'Olives'];

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <h2>Ingredients</h2>
          {ingredients.map((ingredient) => (
            <Ingredient key={ingredient} name={ingredient} />
          ))}
        </div>
        <SaladBowl salad={salad} onDrop={handleDrop} onRemove={handleRemove} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Your Salad</h3>
        <ul>
          {salad.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </DndProvider>
  );
};

export default Salad;
