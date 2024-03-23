// Toggle menu
// const navLinks = document.getElementById("navLinks");

// function showMenu(){
//     navLinks.style.right = "0";    
// }
// function hideMenu(){
//     navLinks.style.right = "-200px";    
// }



const navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.display = "block";    
}
function hideMenu(){
    navLinks.style.display = "none";    
}



// Function to be executed when the observed element intersects with the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }
  
  // Options for the Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Change the threshold as needed
  };
  
  // Create the Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);
  
  // Target element to observe
  const target = document.querySelector('.animate');
  
  // Start observing the target element
  if (target) {
    observer.observe(target);
  }
  