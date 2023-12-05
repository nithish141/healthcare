let change = false;
let originalLeftContent = '';
let originalRightContent = '';
let originalLeftStyles = '';
let originalRightStyles = '';

function changeSide() {
  const leftElement = document.querySelector('.left');
  const rightElement = document.querySelector('.right');
  const signUpButton = document.querySelector('.sign-up-button');

  const applyTransition = (element) => {
    element.classList.add('transition-effect');
  };

  if (!change) {
    change = true;

    // Apply transition before style changes
    applyTransition(leftElement);
    applyTransition(rightElement);

    if (!originalLeftContent) {
      originalLeftContent = leftElement.innerHTML;
      originalLeftStyles = leftElement.getAttribute('style');
    }

    leftElement.style.background = 'linear-gradient(to left, #3caced, #5890ff)';
    leftElement.style.borderTopLeftRadius = '10px';
    leftElement.style.borderBottomLeftRadius = '10px';
    leftElement.style.borderTopRightRadius = '150px';
    leftElement.style.borderBottomRightRadius = '150px';
    leftElement.style.paddingLeft = '70px';
    leftElement.style.color = 'white';

    if (!originalRightContent) {
      originalRightContent = rightElement.innerHTML;
      originalRightStyles = rightElement.getAttribute('style');
    }

    rightElement.style.borderTopLeftRadius = '10px';
    rightElement.style.borderBottomLeftRadius = '10px';
    rightElement.style.fontWeight = 'bolder';
    rightElement.style.background = 'white';
    rightElement.style.color = 'black';
    rightElement.style.paddingLeft = '0';

    leftElement.innerHTML = rightElement.innerHTML;
    leftElement.querySelector('.sign-up-button').innerText = 'Sign In';
    signUpButton.innerText = 'Sign In';
    rightElement.innerHTML = `
      <p class="signIn-header">Sign Up</p>
      <div class="signin-img-div">
        <img src="icons8-google-48.png" class="signin-img">
        <img src="icons8-facebook-48.png" class="signin-img">
        <img src="icons8-twitter-48.png" class="signin-img">
      </div>
      <p class="sign-with">or</p>
      <input class="input-box" type="text" placeholder="Username" required><br>
      <input class="input-box" type="password" placeholder=" Create Password" required><br>
      <input class="input-box" type="password" placeholder="Confirm Password" required><br>
      <button class="login-button" type="submit">Sign Up</button>
    `;
  } else {
    change = false;

    leftElement.innerHTML = originalLeftContent;
    leftElement.setAttribute('style', originalLeftStyles);
    signUpButton.innerText = 'Sign Up';

    rightElement.innerHTML = originalRightContent;
    rightElement.setAttribute('style', originalRightStyles);

    // Apply transition for revert elements
    applyTransition(leftElement);
    applyTransition(rightElement);
  }
}
