type Resizable = {
  resize: () => void; 
};
type Draggable = {
  drag: () => void; 
};

type DraggableResizable = Draggable & Resizable; 

let textbox: DraggableResizable = {
  resize: () => { console.log('Resizing...'); },  
  drag: () => { console.log('Dragging...'); }   
};
