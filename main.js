console.log('working');

// const playlist = document.getElementById('playlist');
const playground = document.getElementById('playground');

// canceling default behavior
function cancel(e) {
    if(e.preventDefault) e.preventDefault();
    if(e.stopPropagation) e.stopPropagation()
    // console.log('cancelling default behavior...')
    return false;
}

// copying file on drag over
function dragOver(e) {
    cancel(e);
    e.dataTransfer.dropEffect = 'copy';
    // console.log('copying files from file system')
}

function dropped(e) {
    cancel(e);
    console.log('dropped...')

    let target = this;
    let video, music;
    const types = e.dataTransfer.types;
    // console.log(types)
    types.forEach(type => {
        if(type === 'Files') {
            const files = e.dataTransfer.files;
            console.log(files)

            /**
            BLOCKER:
            Find the path to the files(video/ audio) dropped
            this will serve as the src attribute
            **/
        }
    })

}

playground.addEventListener('dragenter', cancel);
playground.addEventListener('dragover', dragOver);
playground.addEventListener('dragleave', cancel);
playground.addEventListener('drop', dropped)
