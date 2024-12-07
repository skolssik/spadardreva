
//js для смены картинок
const leftImages = [
  './images/first_kompl_left.png',
  './images/second_kopml_left.png',
  './images/third_kompl_left.png',
  './images/fourth_kompl_left.png'
];

const rightImages = [
  './images/first_kompl_right.png',
  './images/second_kopml_right.png',
  './images/third_kompl_right.png',
  './images/fourth_kompl_right.png'
];

let leftIndex = 0;
let rightIndex = 0;

const leftImg = document.getElementById('left-img');
const rightImg = document.getElementById('right-img');

function changeImages() {
  leftIndex = (leftIndex + 1) % leftImages.length;
  rightIndex = (rightIndex + 1) % rightImages.length;

  leftImg.src = leftImages[leftIndex];
  rightImg.src = rightImages[rightIndex];
}

// Изменять изображение каждые 6 секунд
setInterval(changeImages, 6000);

//JS для таймера
function countdown() {
  const now = new Date();
  const yearEnd = new Date(now.getFullYear() + 1, 0, 1); // 1 января следующего года
  const totalSeconds = Math.floor((yearEnd - now) / 1000);

  const days = Math.floor(totalSeconds / 86400); // 86400 сек в дне
  const hours = Math.floor((totalSeconds % 86400) / 3600); // 3600 сек в часе
  const minutes = Math.floor((totalSeconds % 3600) / 60); // 60 сек в минуте

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
}

// Обновляем каждую минуту
setInterval(countdown, 60000);

// Запускаем сразу при загрузке
countdown();

/*

//burger меню
document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', function() {
      menu.classList.toggle('active'); // Переключение класса active
  });
}); 
*/

const contentData = [
  {
      mainImage: './images_for_js/grafit_left_img.png',
      subImage: './images_for_js/grafit_center_img.png',
      subtitle: 'ГРАФИТ',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/grafit_right_img.png',
  },
  {
      mainImage: './images_for_js/green_left_img.png',
      subImage: './images_for_js/green_center_img.png',
      subtitle: 'ЗЕЛЕНЫЙ',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/green_right_img.png',
  },
  {
      mainImage: './images_for_js/mashroom_left_img.png',
      subImage: './images_for_js/mashroom_center_img.png',
      subtitle: 'МАШРУМ',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/mashroom_right_img.png',
  },
  {
      mainImage: './images_for_js/blue_left_img.png',
      subImage: './images_for_js/blue_center_img.png',
      subtitle: 'СИНИЙ',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/blue_right_img.png',
  },
  {
      mainImage: './images_for_js/antracit_left_img.png',
      subImage: './images_for_js/antracit_center_img.png',
      subtitle: 'АНТРАЦИТ',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/antracit_right_img.png',
  },
  {
      mainImage: './images_for_js/atelie_left_img.png',
      subImage: './images_for_js/atelie_center_img.png',
      subtitle: 'АТЕЛЬЕ СВЕТЛЫЙ',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/atelie_right_img.png',
  },
  {
      mainImage: './images_for_js/sonoma_left_img.png',
      subImage: './images_for_js/sonoma_center_img.png',
      subtitle: 'ДУБ СОНОМА',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/sonoma_right_img.png',
  },
  {
      mainImage: './images_for_js/capuchino_left_img.png',
      subImage: './images_for_js/capuchino_center_img.png',
      subtitle: 'КАПУЧИНО',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/capuchino_right_img.png',
  },
  {
      mainImage: './images_for_js/white_left_img.png',
      subImage: './images_for_js/white_center_img.png',
      subtitle: 'БЕЛЫЙ',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
      sideImage: './images_for_js/white_right_img.png',
  },
];

function changeContent(index) {
  const data = contentData[index - 1]; // Индексы начинаются с 0
  document.getElementById('main-image').src = data.mainImage;
  document.getElementById('sub-image').src = data.subImage;
  document.getElementById('subtitle').innerText = data.subtitle;
  document.getElementById('text').innerText = data.text;
  document.getElementById('side-image').src = data.sideImage;
}

// Изменяем контент на первый по умолчанию
changeContent(1);



// Получаем элементы модального окна
document.getElementById('openModal').onclick = function() {
  document.getElementById('modal').style.display = 'block';
};

document.getElementById('closeModal').onclick = function() {
  document.getElementById('modal').style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
  }
};

document.getElementById('feedbackForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Спасибо за ваш отзыв!');
  document.getElementById('modal').style.display = 'none';
  document.getElementById('feedbackForm').reset();
};

//modalcont
// Получаем элементы для модального окна
var modal = document.getElementById("customWindow");
var closeButton = document.getElementById("closeBtn");
var triggerImage = document.getElementById("triggerImage");

// Открываем модальное окно при клике на изображение
triggerImage.onclick = function() {
    modal.style.display = "block";
};

// Закрываем модальное окно при клике на иконку закрытия
closeButton.onclick = function() {
    modal.style.display = "none";
};

// Закрываем модальное окно при клике вне его содержимого
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
//modalcont
// Получаем элементы для модального окна
var modal = document.getElementById("customWindow");
var closeButton = document.getElementById("closeBtn");
var triggersImage = document.getElementById("triggersImage");

// Открываем модальное окно при клике на изображение
triggersImage.onclick = function() {
    modal.style.display = "block";
};

// Закрываем модальное окно при клике на иконку закрытия
closeButton.onclick = function() {
    modal.style.display = "none";
};

// Закрываем модальное окно при клике вне его содержимого
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//modal for mob
var modal = document.getElementById("customWindow");
var closeButton = document.getElementById("closeBtn");
var triggersImage_mob = document.getElementById("triggersImage_mob");

// Открываем модальное окно при клике на изображение
triggersImage_mob.onclick = function() {
    modal.style.display = "block";
};

// Закрываем модальное окно при клике на иконку закрытия
closeButton.onclick = function() {
    modal.style.display = "none";
};

// Закрываем модальное окно при клике вне его содержимого
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//Carousel
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let currentIndex = 0;
const totalItems = carouselItems.length;

// Функция для обновления отображаемых элементов
function updateCarousel() {
    const offset = -currentIndex * (390 + 30); // Карточка + отступ
    carouselWrapper.style.transform = `translateX(${offset}px)`;
}

// Функция для перехода к следующему элементу
function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

// Функция для перехода к предыдущему элементу
function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

// Автоматическая прокрутка
setInterval(nextItem, 6000); // Прокрутка каждые 6 секунд
// Добавление обработчиков событий для кнопок
nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

//модалка при открытии сайта
document.getElementById('closesBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

// Открытие модального окна при загрузке страницы
window.onload = function() {
    document.getElementById('overlay').style.display = 'flex';
};