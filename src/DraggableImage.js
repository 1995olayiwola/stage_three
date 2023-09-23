import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableImage = ({ index, image, moveImage }) => {
  const [{ isDragging }, ref] = useDrag({
    type: 'IMAGE',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'IMAGE',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={(node) => {
        ref(node);
        drop(node);
      }}
      style={{
        border: '1px solid #ccc',
        padding: '8px',
        marginBottom: '8px',
        backgroundColor: 'white',
        opacity,
        cursor: 'move',
      }}
    >
      <img src={image.src} alt={`Image ${index}`} />
    </div>
  );
};

export default DraggableImage;
