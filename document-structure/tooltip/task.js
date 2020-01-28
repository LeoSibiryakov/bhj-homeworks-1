const tooltip = document.querySelectorAll(`.has-tooltip`);
const tooltipArr = Array.from(tooltip);
const div = document.createElement(`div`);

tooltip.forEach((element) => {
    element.addEventListener(`click`, function () {
      div.classList.add(`tooltip`);
    div.setAttribute(`style`, `left: ${element.getBoundingClientRect().left}px; top: ${element.getBoundingClientRect().top + 16}px`);
    div.classList.toggle(`tooltip_active`);
    div.innerText = `${element.title}`;
    element.insertAdjacentElement("afterend", div);
    event.preventDefault();
  }
)
});