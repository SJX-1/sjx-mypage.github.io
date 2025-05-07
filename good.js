document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');
    let count = parseInt(localStorage.getItem('like-count') || '0');

    likeCount.textContent = count;

    likeButton.addEventListener('click', function() {
        count++;
        likeCount.textContent = count;
        localStorage.setItem('like-count', count);
    });
});