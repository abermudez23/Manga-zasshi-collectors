// Sample manga magazine data
let magazines = [
  {
    title: "Weekly Shonen Jump",
    issue: "Issue #52",
    date: "Dec 2023",
    cover: "https://m.media-amazon.com/images/I/91a1YRhPe3L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Morning",
    issue: "Issue #20",
    date: "Nov 2023",
    cover: "https://m.media-amazon.com/images/I/81Q+0tWn9JL._AC_UF1000,1000_QL80_.jpg"
  }
];

// Display all magazines
function showMagazines() {
  const grid = document.querySelector('.magazine-grid');
  grid.innerHTML = '';
  
  magazines.forEach(mag => {
    grid.innerHTML += `
      <div class="magazine-item">
        <img src="${mag.cover}" class="magazine-cover" alt="${mag.title}">
        <h3>${mag.title}</h3>
        <p>${mag.issue} - ${mag.date}</p>
        <button onclick="removeMagazine('${mag.title}')">Remove</button>
      </div>
    `;
  });
}

// Add new magazine (will connect to form later)
function addMagazine(title, issue, date, cover) {
  magazines.push({ title, issue, date, cover });
  showMagazines();
}

// Remove magazine
function removeMagazine(title) {
  magazines = magazines.filter(mag => mag.title !== title);
  showMagazines();
}

// Initialize on page load
window.onload = showMagazines;
