// JavaScript Code for Skill Hub Project

// DOM Elements
const videoSpans = document.querySelectorAll('#video-list span');
const player = document.getElementById('youtube-player');
const checkboxes = document.querySelectorAll('.completed-checkbox');
const progressBar = document.getElementById('progress-bar');
const progressText = document.querySelector('#progress-tracker p');
const notesInput = document.getElementById('custom-notes');
const saveNotesBtn = document.getElementById('save-notes-btn');
const ratingInput = document.getElementById('course-rating');
const submitRatingBtn = document.getElementById('submit-rating-btn');

// Function to play video when title is clicked
videoSpans.forEach((videoSpan) => {
  videoSpan.addEventListener('click', () => {
    const videoUrl = videoSpan.getAttribute('data-url');
    player.src = videoUrl;
  });
});

// Function to update progress
function updateProgress() {
  const totalVideos = checkboxes.length;
  const completedVideos = Array.from(checkboxes).filter((cb) => cb.checked).length;
  const progressPercentage = Math.round((completedVideos / totalVideos) * 100);

  // Update progress bar and text
  progressBar.style.width = `${progressPercentage}%`;
  progressText.textContent = `${progressPercentage}% Completed`;
}

// Add event listeners to checkboxes for progress update
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', updateProgress);
});

// Save Notes Functionality
saveNotesBtn.addEventListener('click', () => {
  const notes = notesInput.value.trim();
  if (notes) {
    alert('Your notes have been saved!');
  } else {
    alert('Please add some notes before saving.');
  }
});

// Submit Rating Functionality
submitRatingBtn.addEventListener('click', () => {
  const rating = parseInt(ratingInput.value, 10);
  if (rating >= 1 && rating <= 5) {
    alert(`Thank you for rating the course ${rating}/5!`);
  } else {
    alert('Please provide a rating between 1 and 5.');
  }
});
