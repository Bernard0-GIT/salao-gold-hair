<script>

    
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


document.querySelectorAll('.gallery img').forEach(img = {
img.addEventListener('click', () => {
lightbox.style.display = 'flex';
lightboxImg.src = img.src;
})
});


function closeLightbox() {
lightbox.style.display = 'none'
}




</script>