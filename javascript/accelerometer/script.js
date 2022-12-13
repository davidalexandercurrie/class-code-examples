const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener('reading', () => {
  document.getElementById('x').innerText = `x: ${acl.x}`;
  document.getElementById('y').innerText = `y: ${acl.y}`;
  document.getElementById('z').innerText = `z: ${acl.z}`;
});

acl.start();
