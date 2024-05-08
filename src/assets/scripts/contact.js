document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('li');
    newComment.classList.add('list-group-item');
    newComment.innerHTML = `<strong>${name}</strong> (${email}) dice: <p>${message}</p>`;

    commentsList.appendChild(newComment);

    document.getElementById('contactForm').reset();
});
