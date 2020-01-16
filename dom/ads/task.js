let phrase = document.querySelector('.rotator__case');
const switchPhrase = () => {
  if (phrase.classList.contains('rotator__case_active')) {
    phrase.classList.remove('rotator__case_active');
  }
  phrase = phrase.nextElementSibling;
  if (phrase == null) {
    phrase = document.querySelector('.rotator__case');
  }
  phrase.classList.add('rotator__case_active');
}

setInterval(switchPhrase, 1000);