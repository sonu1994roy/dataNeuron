
interact('.component')
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    restrictEdges: {
      outer: 'container',
      endOnly: true,
    },
    restrictSize: {
      min: { width: 100, height: 100 },
    },
  })
  .on('resizemove', function (event) {
    var target = event.target;
    var x = parseFloat(target.getAttribute('data-x')) || 0;
    var y = parseFloat(target.getAttribute('data-y')) || 0;

    // Update element width and height
    target.style.width = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // Update element position
    x += event.deltaRect.left;
    y += event.deltaRect.top;
    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

    // Update data attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });
