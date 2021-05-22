const comment = document.getElementById('comment');
const commentBtn = document.getElementById('commentBtn');
const commentWrapper = document.getElementById('comment-wrapper');
const commentCounter = document.getElementById('comment-counter');
const noneComment = document.getElementById('none-comment');
const delay = 1000


/**
 * This function createa a comment
 * @param {string} content 
 */
const createComment = (content) => {
    const date = new Date();
    const newDataset = parseInt(commentCounter.dataset.value) + 1;
    var div = document.createElement("DIV");
    div.classList.add('col-12');
    div.classList.add('comment-setting');
    div.innerHTML = '<a class="time">' +  date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()  + '</a>'
    div.innerHTML += `<button type="button" id="${newDataset}" class="btn-close" aria-label="Close" onclick="deleteComment(${newDataset})"></button>`
    div.innerHTML += '<p class="mt-2">' + content + '</p>'
    setTimeout(() => {
        noneComment.style.display = 'none';
        commentWrapper.appendChild(div)
        commentCounter.innerHTML = '(' + (newDataset) + ')'
        commentCounter.setAttribute('data-value', newDataset)
    }, delay);
}

/**
 * This function deletes a comment
 * @param {string} id 
 */
const deleteComment = (id) => {
    const newDatasetReduce = parseInt(commentCounter.dataset.value) - 1;
    const item = document.getElementById(id);
    item.parentElement.remove()
    commentCounter.innerHTML = '(' + (newDatasetReduce ) + ')'
    commentCounter.setAttribute('data-value', newDatasetReduce)
 }
 
/**
 * this function gives a loading effect
 */
const loading = () => {
    commentBtn.innerHTML = `
    <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
    </div>
    </div>
    `

    setTimeout(() => {
        commentBtn.innerHTML = `Gönder`
    }, delay);
}

commentBtn.addEventListener('click', e =>{
    if(comment.value.length == 0) {
        alert("Boş yorum yapılamaz.");
        return
    }
    
    createComment(comment.value)
    loading()
    comment.value = ''
})
