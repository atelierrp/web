// Add this to your existing script.js

// Random movement variation for shapes
document.addEventListener("DOMContentLoaded", () => {
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape) => {
    // Add slight random variations to each shape's animation
    const randomScale = 0.8 + Math.random() * 0.4; // Random scale between 0.8 and 1.2
    const randomDuration = 15 + Math.random() * 10; // Random duration between 15-25s

    shape.style.animationDuration = `${randomDuration}s`;
    shape.style.transform = `scale(${randomScale})`;
  });
});

// Optional: Subtle parallax effect on mouse move
document.addEventListener("mousemove", (e) => {
  const shapes = document.querySelectorAll(".shape");
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  shapes.forEach((shape, index) => {
    const offset = (index + 1) * 20;
    shape.style.transform = `translate(${mouseX * offset}px, ${
      mouseY * offset
    }px)`;
  });
});
