function showGallery(id) {
  const gallery = document.getElementById('gallery');

  let images = [];

  if (id === 'tangier') {
    images = [
      './photos/From Tangier to Marrakesh1.jpg',
      './photos/From Tangier to Marrakesh2.jpg',
      './photos/From Tangier to Marrakesh3.jpg',
      './photos/From Tangier to Marrakesh4.jpg',
      './photos/From Tangier to Marrakesh5.jpg',
      './photos/From Tangier to Marrakesh6.jpg',
      './photos/From Tangier to Marrakesh7.jpg',
      './photos/From Tangier to Marrakesh8.jpg',
    ];
  } else if (id === 'alpes') {
    images = [
      './photos/alpespoloniae1.jpg',
      './photos/alpespoloniae2.jpg',
      './photos/alpespoloniae3.jpg',
      './photos/alpespoloniae4.jpg',
      './photos/alpespoloniae5.jpg',
      './photos/alpespoloniae6.jpg',
      './photos/alpespoloniae7.jpg',
      './photos/alpespoloniae8.jpg',
      './photos/alpespoloniae9.jpg',
      './photos/alpespoloniae10.jpg',
      './photos/alpespoloniae11.jpg',
      './photos/alpespoloniae12.jpg',
    ];
  } else if (id === 'warsaw') {
    images = [
      './photos/warsaw1.jpg',
      './photos/warsaw2.jpg',
      './photos/warsaw5.jpg',
      './photos/warsaw6.jpg',
      './photos/warsaw7.jpg',
      './photos/warsaw8.jpg',
      './photos/warsaw9.jpg',
      './photos/warsaw11.jpg',
      './photos/warsaw12.jpg',
      './photos/warsaw13.jpg',
      './photos/warsaw3.jpg',
      './photos/warsaw4.jpg',
      './photos/warsaw10.jpg',
    ];
  } else if (id === 'sand') {
    images = [
      './photos/strona1.jpg',
      './photos/strona2.jpg',
      './photos/strona3.jpg',
      './photos/strona4.jpg',
      './photos/strona5.jpg',
      './photos/strona6.jpg',
      './photos/strona7.jpg',
      './photos/strona8.jpg',
      './photos/strona9.jpg',
      './photos/strona10.jpg',
      './photos/strona11.jpg',
      './photos/strona12.jpg',
      './photos/strona13.jpg',
      './photos/strona14.jpg',
      './photos/strona15.jpg',
      './photos/strona16.jpg',
      './photos/strona17.jpg',
      './photos/strona18.jpg',
      './photos/strona19.jpg',
      './photos/strona20.jpg',
    ];
  }

  gallery.innerHTML = '';
  gallery.className = 'grid-view'; 

  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
  });

  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG' && e.target.closest('#gallery')) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = e.target.src;
      lightbox.style.display = 'block';
  }

  if (e.target.classList.contains('close') || e.target.id === 'lightbox') {
    document.getElementById('lightbox').style.display = 'none';
  }});
}

