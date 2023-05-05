AFRAME.registerComponent('color-on-mouseenter', {
  schema: {
    to: { default: '#FF0000', type: 'color' },
    scale: { default: '1 1 1', type: 'string' }
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var defaultColor = el.getAttribute('material').color;
    var defaultScale = '0.8 0.8 0.8'; // asigna una nueva escala por defecto
    var isScaled = false;

    this.el.addEventListener('mouseenter', function () {
      el.setAttribute('material', 'color', data.to);
    });

    this.el.addEventListener('mouseleave', function () {
      el.setAttribute('material', 'color', defaultColor);
    });

    this.el.addEventListener('click', function () {
      if (isScaled) {
        el.setAttribute('scale', defaultScale);
        isScaled = false;
      } else {
        el.setAttribute('scale', data.scale);
        isScaled = true;
      }
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.getElementById('edit-button');
  const editor = document.getElementById('editor');
  const editorContainer = document.getElementById('editor-container');

  editButton.addEventListener('click', function () {
    editor.style.display = 'block';
  });


  const addCubeButton = document.getElementById('add-cube');

  addCubeButton.addEventListener('click', function () {
    const cube = document.createElement('a-box');
    cube.setAttribute('position', `${document.getElementById('x-pos').value} ${document.getElementById('y-pos').value} ${document.getElementById('z-pos').value}`);
    cube.setAttribute('color', '#0087FF');
    cube.setAttribute('width', '0.5');
    cube.setAttribute('height', '0.5');
    cube.setAttribute('depth', '0.5');
    document.querySelector('a-scene').appendChild(cube);
  });

  const updatePositionButton = document.getElementById('update-position');

  updatePositionButton.addEventListener('click', function () {
    const selectedObject = document.querySelector('a-sphere');
    const xPosInput = document.getElementById('edit-x-pos');
    const yPosInput = document.getElementById('edit-y-pos');
    const zPosInput = document.getElementById('edit-z-pos');
    selectedObject.setAttribute('position', `${xPosInput.value} ${yPosInput.value} ${zPosInput.value}`);
  });

  document.addEventListener('click', function (event) {
    if (!editorContainer.contains(event.target)) {
      editor.style.display = 'none';
    }
  });
});
