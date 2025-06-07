// Sample data - in a real app this would come from a database
let magazines = [
    {
        id: 1,
        title: "Weekly Shonen Jump",
        issue: "2023-12-04",
        cover: "https://m.media-amazon.com/images/I/91a1YRhPe3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 2,
        title: "Morning",
        issue: "2023-11-30",
        cover: "https://m.media-amazon.com/images/I/81Q+0tWn9JL._AC_UF1000,1000_QL80_.jpg"
    }
];

// DOM Elements
const magazineGrid = document.getElementById('magazine-grid');
const addForm = document.getElementById('add-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Display magazines
function displayMagazines(magazinesToDisplay) {
    magazineGrid.innerHTML = '';
    
    magazinesToDisplay.forEach(magazine => {
        const magazineElement = document.createElement('div');
        magazineElement.className = 'magazine-item';
        magazineElement.innerHTML = `
            <img src="${magazine.cover}" alt="${magazine.title} ${magazine.issue}" class="magazine-cover">
            <div class="magazine-info">
                <h3>${magazine.title}</h3>
                <p>${magazine.issue}</p>
            </div>
        `;
        magazineGrid.appendChild(magazineElement);
    });
}

// Add new magazine
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('magazine-title').value;
    const issue = document.getElementById('issue-number').value;
    const date = document.getElementById('pub-date').value;
    const coverInput = document.getElementById('cover-image');
    
    // Simple image handling - in a real app you'd upload to a server
    let cover = '';
    if (coverInput.files && coverInput.files[0]) {
        cover = URL.createObjectURL(coverInput.files[0]);
    } else {
        cover = 'https://via.placeholder.com/180x250?text=No+Cover';
    }
    
    const newMagazine = {
        id: magazines.length + 1,
        title,
        issue,
        date,
        cover
    };
    
    magazines.push(newMagazine);
    displayMagazines(magazines);
    addForm.reset();
});

// Simple search
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = magazines.filter(mag => 
        mag.title.toLowerCase().includes(searchTerm) || 
        mag.issue.toLowerCase().includes(searchTerm)
    );
    displayMagazines(filtered);
});

// Initial display
displayMagazines(magazines);
