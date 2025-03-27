Always Rotate Cube

This project showcases a 3D rotating cube with a simple interactive button that allows you to start or stop the animation of the cube. It's a great way to experiment with 3D transformations, CSS animations, and JavaScript for controlling animation states. This project demonstrates how you can integrate HTML, CSS, and JavaScript to create a fun and dynamic visual experience on the web.
Features

    3D Cube Rotation: A cube is created using CSS and positioned in 3D space. Each face of the cube is positioned absolutely with specific transformations to create a realistic 3D effect.

    Interactive Button: The cube's animation can be toggled on or off with the click of a button. When the button is clicked, the cube will start rotating, and when clicked again, the animation will stop and freeze at its current position.

    Customizable Rotation Speed: The cube rotates continuously with a smooth animation, and you can adjust the rotation duration (in this case, it’s set to 5 seconds for a full rotation).

    Responsive Design: The animation works seamlessly on various screen sizes, and the layout is centered on the page for a clean and organized appearance.

How It Works

    HTML Structure:

        The HTML file defines a div with the class rotate that contains six child divs, each representing a face of the cube (front, back, left, right, top, bottom).

        A button is included to toggle the animation.

    CSS Styles:

        The cube is positioned in 3D space using CSS transform properties like rotateY and translateZ.

        Each face of the cube is given a background gradient and positioned absolutely within the container to form the shape of a cube.

        The @keyframes rotate CSS animation defines a continuous rotation of the cube along both the X and Y axes.

        The body is styled with a background color and centered layout for better visibility.

    JavaScript Functionality:

        The script adds an event listener to the button, toggling the cube's animation.

        It checks if the animation is currently running or paused and updates the state accordingly.

        When the animation is paused, it "freezes" the cube at the current rotation angle, so the cube doesn't reset when resumed.

Usage

    Clone or download the project files.

    Open index.html in a web browser.

    Click the button to start and stop the 3D cube rotation animation.

Example of Code Execution

Upon clicking the button:

    Start Animation: The cube begins rotating in 3D space continuously.

    Stop Animation: The rotation pauses and freezes the cube in its current state.

Example:

    Initially, the cube is stationary.

    When the button is clicked, the cube will rotate on both axes.

    When clicked again, the cube will freeze at the current position.

Code Explanation
HTML

The HTML defines the structure of the cube and the button for controlling the animation. Each face of the cube (front, back, left, right, top, bottom) is represented as a div inside the rotate container.

<div class="rotate">
    <div class="position front">front</div>
    <div class="position back">back</div>
    <div class="position left">left</div>
    <div class="position right">right</div>
    <div class="position top">top</div>
    <div class="position bottom">bottom</div>
</div>
<button class="but">Click to Start/Stop Animation</button>

CSS

The cube faces are arranged using transform properties. The keyframe animation defines a smooth, continuous rotation of the cube.

@keyframes rotate {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
}

Each face of the cube is rotated to align correctly using specific rotation values.
JavaScript

The script listens for a button click to toggle the animation state. If the animation is not running, it starts, and if it’s running, it pauses and freezes the cube’s current rotation.

const btn = document.querySelector('.but');
let isAnimating = false;
let currentRotation = 0;

btn.addEventListener('click', () => {
    const rotate = document.querySelector('.rotate');

    if (!isAnimating) {
        rotate.style.animation = `rotate 5s infinite linear`;
        rotate.style.animationPlayState = 'running';
        rotate.style.transform = `rotate(${currentRotation}deg)`;
        isAnimating = true;
    } else {
        rotate.style.animationPlayState = 'paused';
        currentRotation = parseFloat(getComputedStyle(rotate).transform.split(',')[4]);
        rotate.style.transform = `rotate(${currentRotation}deg)`;
        isAnimating = false;
    }
});
