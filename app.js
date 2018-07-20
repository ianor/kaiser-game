document.addEventListener('DOMContentLoaded', () => {
  console.log('all the base are belong to us!');
  const wrapper = document.querySelector('#game');

  const ball = document.createElement('div');
  ball.style.backgroundColor = 'red';
  ball.style.height = '100px';
  ball.style.width = '100px';
  ball.style.position = 'absolute';

  wrapper.innerHTML = '';
  wrapper.appendChild(ball);

  let left = 0;
  let top = 0;
  let topSpeed = 0;
  let leftSpeed = 0;
  
  document.addEventListener('keydown', event => {
    const key = event.key;
    console.log(event)
    if (key === "ArrowRight") {
      leftSpeed += 2;
    } else if (key === "ArrowLeft") {
      leftSpeed -= 2;
    }
    else if (key === " "){
      topSpeed -= 10
    }
    ball.style.left = `${left}px`;
  });
  
  function onTime() {
    top += topSpeed;
    left += leftSpeed;

    ball.style.top = `${top}px`; 
    ball.style.left = `${left}px`; 

    if (top > 500) {
      top = 500;
      topSpeed *= -0.99999;
    } else if (top < 0) {
      top = 0;
      topSpeed = 0;
    }

    if (left > 1200) {
      left = 1200;
      leftSpeed *= -1;
    } else if (left < 0) {
      left = 0;
      leftSpeed *= -1;
    }
    topSpeed+= 3
    requestAnimationFrame(onTime);
  }

  requestAnimationFrame(onTime);
});