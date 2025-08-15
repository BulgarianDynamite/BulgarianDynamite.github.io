function loadContent(url, addToHistory = true) {
    fetch(url)
        .then(res => res.text())
        .then(html => {
            const content = document.getElementById('content');
            content.innerHTML = html;

            if (addToHistory) {
                history.pushState({ url }, '', url);
            }

            window.scrollTo(0, 0);
            attachLinkHandlers();
        })
        .catch(err => console.error('Error loading content:', err));
}

function attachLinkHandlers() {
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const url = e.target.getAttribute('href');
            loadContent(url);
        });
    });
}

window.addEventListener('popstate', e => {
    if (e.state && e.state.url) {
        loadContent(e.state.url, false);
    } else {
        location.reload(); // Back to home
    }
});

attachLinkHandlers();

