(() => {

  function burgerFunc() {
    let burgerButton = document.querySelector('.navbar__burger');
    let burgerRoot = document.querySelector('.navmobile'),
      burgerDimmer = burgerRoot.querySelector('.navmobile__dimmer'),
      burgerMenu = burgerRoot.querySelector('.navmobile__menu'),
      burgerLists = burgerMenu.querySelectorAll('.navmobile__list');

    burgerButton.onclick = () => {
      if (!burgerRoot.classList.contains('navmobile--active')) {
        burgerRoot.classList.add('navmobile--active');
        burgerDimmer.addEventListener('focusin', burgerClose)
      }
    }

    for (let index = 0; index < burgerLists.length; index++) {
      let mainItem = burgerLists[index].querySelector('.navmobile__subitem');
      mainItem.onclick = () => {
        var parentList = mainItem.parentNode;
        if (!parentList.classList.contains('navmobile__list--active')) {
          var activeList = burgerMenu.querySelector('.navmobile__list--active');
          if (activeList !== null) {
            activeList.classList.remove('navmobile__list--active');
            activeList.style.cssText = '';
          }
          parentList.classList.add('navmobile__list--active');
          var items = parentList.querySelectorAll('.navmobile__subitem'),
            itemsHeight = 0;
          for (let index = 0; index < items.length; index++) {
            itemsHeight += parseInt(getComputedStyle(items[index]).height);
          }
          parentList.style.cssText = 'height: ' + itemsHeight + 'px';
        } else {
          parentList.classList.remove('navmobile__list--active');
          parentList.style.cssText = '';
          console.log('here');
        }
      }
    }


    function burgerClose() {
      burgerRoot.classList.remove('navmobile--active');
      burgerDimmer.removeEventListener('focusin', burgerClose);
    }

  }
  
  let offerItemClick = function () {
    for (let index = 0; index < offerItemList.length; index++) {
      offerItemList[index].classList.remove('offer__item--active');
    }
    this.classList.add('offer__item--active');
  }
  let footerMobileDropdown = function() {
    let itemList = this.parentNode;
    let items = itemList.querySelectorAll('.footer__item');
    let itemsHeight = 0;

    for (let index = 0; index < items.length; index++) {
      itemsHeight += parseInt(getComputedStyle(items[index]).height);
    }

    if (!itemList.classList.contains('footer__items--dropdown')) {
      itemList.classList.add('footer__items--dropdown');
      itemList.style.cssText = 'height: ' + itemsHeight + 'px;';
    } else {
      itemList.classList.remove('footer__items--dropdown');
      itemList.style.cssText = 'height: 75px;';
    }
  }

  let offerItemList = document.querySelectorAll('.offer__item');
  for (let index = 0; index < offerItemList.length; index++) {
    offerItemList[index].onclick = offerItemClick;
  }

  if (screen.availWidth <= 1449) {
    let footerItems = document.querySelectorAll('.footer__items')
    for (let index = 0; index < footerItems.length; index++) {
      if (!footerItems[index].classList.contains('footer__buttons')) {
        let footerItem = footerItems[index].querySelector('.footer__item');
        footerItem.addEventListener('click', footerMobileDropdown);
      }
    }
    burgerFunc();
  }
}) ()