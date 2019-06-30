console.log('working');

const dropTarget = document.getElementById('dropTarget');
console.log(dropTarget)

function cancel(e) {
    if(e.preventDefault) e.preventDefault()
    if(e.stopPropagation) e.stopPropagation()
    console.log('canceling default behavior...')
    return false;
};

function dragOver(e) {
    cancel(e);
    // copying files from file system
    console.log('copying files from file system...')
    e.dataTransfer.dropEffect = 'copy';
}

dropTarget.addEventListener('dragenter', cancel)
dropTarget.addEventListener('dragover', dragOver)
dropTarget.addEventListener('dragleave', cancel)
dropTarget.addEventListener('drop', dropped)
