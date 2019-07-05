console.log('working');

// const playlist = document.getElementById('playlist');
const playground = document.getElementById('playground');

// canceling default behavior
function cancel(e) {
    if(e.preventDefault) e.preventDefault();
    if(e.stopPropagation) e.stopPropagation()
    console.log('cancelling default behavior...')
    return false;
}

// copying file on drag over
function dragOver(e) {
    cancel(e);
    e.dataTransfer.dropEffect = 'copy';
    console.log('copying files from file system')
}

playground.addEventListener('dragenter', cancel);
playground.addEventListener('dragover', dragOver);
playground.addEventListener('dragleave', cancel);
playground.addEventListener('drop', dropped)
