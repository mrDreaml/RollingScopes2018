import createNode from './createNode';
import updateBlockItems from './updateBlockStack';

export default function renderPage(clipData) {
  const itemsView = {
    currentPage: 0,
    pageitems: 4,
    max: clipData.items.length,
  };
  const main = document.body.appendChild(createNode('main'));
  const slideNext = main.appendChild(createNode('div', [], [['id', 'next-slide']]));
  slideNext.appendChild(createNode('div', ['icon-next-slide']));
  const slidePrev = main.appendChild(createNode('div', [], [['id', 'prev-slide']]));
  slidePrev.appendChild(createNode('div', ['icon-prev-slide']));
  main.appendChild(createNode('div', ['container'], [['id', 'block-stack']]));
  {
    const lastProtionElement = itemsView.currentPage + itemsView.pageitems;
    updateBlockItems(clipData.items.slice(itemsView.currentPage, lastProtionElement));
  }

  function changeSlide(step) {
    // animation
    const blockStack = document.getElementById('block-stack');
    const animationDuration = 400;
    blockStack.style.transition = `${animationDuration / 1000}s`;
    blockStack.style.opacity = 0;
    const shiftX = 500;
    const directionX = step > 0 ? -shiftX : shiftX;
    blockStack.style.transform = `translateX(${directionX}px)`;
    setTimeout(() => {
      blockStack.style.transition = '0s';
      blockStack.style.opacity = 1;
      blockStack.style.transform = 'translateX(0)';
    }, animationDuration);
    setTimeout(() => {
      itemsView.currentPage += step * itemsView.pageitems;
      if (itemsView.currentPage >= itemsView.max && step > 0) {
        itemsView.currentPage = 0;
      } else if ((itemsView.currentPage + itemsView.pageitems <= 0 && step < 0)) {
        itemsView.currentPage = itemsView.max - (itemsView.max % itemsView.pageitems);
      }
      const lastPortionElement = itemsView.currentPage + itemsView.pageitems;
      if (itemsView.currentPage < 0) {
        itemsView.currentPage = 0;
      }
      updateBlockItems(clipData.items.slice(itemsView.currentPage, lastPortionElement));
    }, animationDuration);
  }
  // Events
  document.getElementById('next-slide')
    .addEventListener('click', () => {
      changeSlide(1);
    });
  document.getElementById('prev-slide')
    .addEventListener('click', () => {
      changeSlide(-1);
    });
  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
      changeSlide(1);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
      changeSlide(-1);
    }
  });
}
