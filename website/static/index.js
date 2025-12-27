function deleteNote(noteID) {
    fetch('/delete-note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ noteId: noteID }),
    }).then((_res) => {
        window.location.href = '/';
    });
}