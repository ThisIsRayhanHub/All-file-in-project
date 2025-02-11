// Navbar Section
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Video Section

const playIcon = document.getElementById('playIcon');
const videoCard = document.getElementById('videoCard');
const closeVideo = document.getElementById('closeVideo');

//Show video card when play icon is clicked 
playIcon.addEventListener('click', () => {
  videoCard.classList.add('active');
});

//Close video card when close  icon is clicked

closeVideo.addEventListener('click', () => {
  videoCard.classList.remove('active');
});


//Cards Show 

document.addEventListener("DOMContentLoaded", () => {
  const items = {
    plant: [
      "images/plant1.png",
      "images/plant2.webp",
      "images/plant3.png",
      "images/plant4.webp",
      "images/plant5.png",
      "images/plant6.png",
    ],
    table: [
      "images/table1.png",
      "images/table2.png",
      "images/table3.webp",
      "images/table4.webp",
      "images/table5.png",
      "images/table6.png",
    ],
    lamp: [
      "images/lamp1.webp",
      "images/lamp2.webp",
      "images/lamp3.webp",
      "images/lamp4.png",
      "images/lamp5.webp",
      "images/lamp6.webp",
    ],
    sofa: [
      "images/sofa1.webp",
      "images/sofa2.webp",
      "images/sofa3.webp",
      "images/sofa4.webp",
      "images/sofa5.png",
      "images/sofa6.png",
    ],
  };

  //Add click event to all "plus" buttons

   document.querySelectorAll(".plus-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.dataset.item;
      const card = document.getElementById(`${item}-card`);
      card.innerHTML = ""; 

      items[item].forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `${item} option`;
        img.style.cursor = "pointer";

        img.addEventListener("click", () => {
          const mainImage = button.previousElementSibling;
          mainImage.src = imgSrc;
        });

        card.appendChild(img);
      });

      card.classList.toggle("active"); 
    });
  });
});