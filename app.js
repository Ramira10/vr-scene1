AFRAME.registerComponent('color-on-mouseenter', {
  schema: {
  to: { default: '#FF0000', type: 'color' }
  },
  
  init: function () {
  var data = this.data;
  var el = this.el;
  this.el.addEventListener('mouseenter', function () {
  el.setAttribute('material', 'color', data.to);
  });
  }
  });

document.addEventListener("DOMContentLoaded", function() {
  const editButton = document.getElementById('edit-button');
  const editor = document.getElementById('editor');
  const editorContainer = document.getElementById('editor-container');

  editButton.addEventListener('click', function() {
    editor.style.display = 'block';
  });


  const addCubeButton = document.getElementById('add-cube');

  addCubeButton.addEventListener('click', function() {
    const cube = document.createElement('a-box');
    cube.setAttribute('position', `${document.getElementById('x-pos').value} ${document.getElementById('y-pos').value} ${document.getElementById('z-pos').value}`);
    cube.setAttribute('color', '#0087FF');
    cube.setAttribute('width', '0.5');
    cube.setAttribute('height', '0.5');
    cube.setAttribute('depth', '0.5');
    document.querySelector('a-scene').appendChild(cube);
  });

  const updatePositionButton = document.getElementById('update-position');

  updatePositionButton.addEventListener('click', function() {
    const selectedObject = document.querySelector('a-sphere');
    const xPosInput = document.getElementById('edit-x-pos');
    const yPosInput = document.getElementById('edit-y-pos');
    const zPosInput = document.getElementById('edit-z-pos');
    selectedObject.setAttribute('position', `${xPosInput.value} ${yPosInput.value} ${zPosInput.value}`);
  });

  document.addEventListener('click', function(event) {
    if (!editorContainer.contains(event.target)) {
      editor.style.display = 'none';
    }
  });
});
