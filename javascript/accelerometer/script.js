const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener('reading', () => {
  document.getElementById('x').innerText = `x: ${acl.x}`;
  document.getElementById('x').innerText = `y: ${acl.y}`;
  document.getElementById('x').innerText = `z: ${acl.z}`;
});

acl.start();
