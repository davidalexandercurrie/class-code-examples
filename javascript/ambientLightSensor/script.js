if ('AmbientLightSensor' in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener('reading', event => {
    document.getElementById(
      'light-level'
    ).innerText = `Current light level: ${sensor.illuminance}`;
  });
  sensor.addEventListener('error', event => {
    console.log(event.error.name, event.error.message);
    document.getElementById(
      'error'
    ).innerText = `${event.error.name}: ${event.error.message}`;
  });
  sensor.start();
}
