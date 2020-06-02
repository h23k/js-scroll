import style from './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const toTop = document.querySelector('.to-top');
  const scroll = document.querySelector('.scroll');

  document.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop <= 0) {
      toTop.classList.add('to-top--hide');
    } else {
      toTop.classList.remove('to-top--hide');
    }

    if (scrollHeight <= scrollTop + clientHeight) {
      scroll.classList.add('scroll--hide');
    } else {
      scroll.classList.remove('scroll--hide');
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({
      "top": 0,
      "behavior": "smooth"
    });
  });

  scroll.addEventListener('click', () => {
    const contents = document.querySelectorAll('.content');

    for (var i = 0; i < contents.length; i++) {
      const targetTop = Math.abs(contents[i].getBoundingClientRect().top);
      if (0 < targetTop) {
        window.scrollBy({
          "top": targetTop,
          "behavior": "smooth"
        });
        break;
      }
    }
  });
});
