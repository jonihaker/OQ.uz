const theme = document.querySelector('.btn__theme');
const icon = document.querySelector('.icon');
const imgEl = document.querySelector('.el')
const logo = document.querySelector('.logo1')

theme.addEventListener('click', () => {
  if(document.body.classList.contains('dark')){
    document.body.classList.remove('dark');
    icon.className = 'fa-regular fa-sun';
    imgEl.src = 'https://oq.uz/images/banner/elmurod/desktop/uzb.png'
    logo.src = 'oq-light-logo.svg'
  } else {
    document.body.classList.add('dark');
    icon.className = 'fa-regular fa-moon';
    imgEl.src = 'https://oq.uz/images/banner/elmurod/desktop/uzbDark.png'
    logo.src = 'oq-dark-logo.svg'
  }
});


const btnLang = document.querySelector('.btn__lang');
const ul = document.querySelector('.ul');

btnLang.addEventListener('click', () => {
  ul.classList.toggle('show');
});


const li = document.querySelectorAll('.li');

li.forEach((item) => {
  item.addEventListener('click', () => {
    li.forEach(li => li.classList.remove('activated__lang'));
    item.classList.add('activated__lang');

    btnLang.textContent = item.dataset.lang;
    ul.classList.remove('show');
  });
});

const images = document.querySelectorAll('.box__image');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function updateImages() {
  images.forEach((image) => {
    if (currentIndex === 0) {
      image.style.transform = 'translateX(100%)';
    } else if (currentIndex === 1) {
      image.style.transform = 'translateX(0%)';
    } else if (currentIndex === 2) {
      image.style.transform = 'translateX(-100%)';
    }
  });

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('activated--dot');
    } else {
      dot.classList.remove('activated--dot');
    }
  });
}


dots.forEach((dot) => {
  dot.addEventListener('mouseover', (e) => {
    currentIndex = [...dots].indexOf(e.target)
  })
})

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;  
  updateImages();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImages();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImages();
}, 5000);

updateImages();


const guids = document.querySelectorAll('.box__guid');
const guidImgs = document.querySelectorAll('.guid__img');

guids.forEach((guid, index) => {
  guid.addEventListener('click', (e) => {
    guids.forEach(guid => guid.classList.remove('showing--guidbox'));
    e.currentTarget.classList.add('showing--guidbox');
    
    guidImgs.forEach(img => {
      img.style.transform = `translateY(${index * -100}%)`;
    });
  });
});
