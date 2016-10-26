export const tabsNavigation = () => {
  // Initializing current hash to be empty
  let currentHash = '';
  // The main tab on the page
  const mainTab = document.querySelector('[data-tabs-navigation]');
  // The list of tabs
  const tabList = [... document.querySelectorAll('.nav__item--light')];
  // An array of views and hash associated with each tab
  const viewList = tabList.map(tab => {
    return {
      hash: tab.firstChild.hash,
      tabElement: tab,
      viewDiv: document.querySelector(tab.firstChild.hash),
    };
  });

  // Function to remove inactive views
  const removeActive = (currentElement) => {
    viewList.forEach((element) => {
      if (!(element === currentElement)) {
        element.viewDiv.classList.add('hidden');
      }
    });
  };

  // Function to set the active view
  const setActiveView = (element) => {
    currentHash = element.hash;
    window.location.hash = currentHash;
    if (currentHash === '#light-theme') {
      const icons = [... mainTab.querySelectorAll('.tab-theme-icon')];
      icons[1].classList.add('light--selected');
      icons[0].classList.remove('dark--selected');
    } else if (currentHash === '#dark-theme') {
      const icons = [... mainTab.querySelectorAll('.tab-theme-icon')];
      icons[0].classList.add('dark--selected');
      icons[1].classList.remove('light--selected');
    }
    element.tabElement.classList.add('bx--tabs--selected');
    element.viewDiv.classList.remove('hidden');
    removeActive(element);
    document.querySelector('.bx--tabs__trigger-text').textContent = element.tabElement.textContent;
  };

  // Function to update hash
  const updateHash = () => {
    const hashArray = window.location.hash.split('#');
    // If URL does not have a hash, set hash to the hash of the first tab
    if (window.location.hash === '') {
      currentHash = tabList[0].firstChild.hash;
    } else {
      if (hashArray.length > 2) {
        currentHash = `#${hashArray[1]}`;
      } else {
        currentHash = window.location.hash;
      }
    }
    // Goes through each tab and sets the active view
    viewList.forEach((element) => {
      if (element.hash === currentHash) {
        setActiveView(element);
        if (hashArray.length > 2) {
          window.location.hash = `${window.location.hash}#${hashArray[2]}`;
        }
      }
    });
  };

  const scrollToTop = () => {
    viewList.forEach((element) => {
      if (element.hash === window.location.hash) {
        window.scrollTo(0, 0);
      }
    });
  };

  // If main tab exists, update the hash and sets the active view when clicked
  if (mainTab) {
    updateHash();
    viewList.forEach((element) => {
      element.tabElement.addEventListener('click', () => {
        setActiveView(element);
      });
    });
  }

  // On load, scroll to top of the window to prevent page jumping
  window.addEventListener('load', scrollToTop);

  // On hash change, scroll to top of the window to prevent page jumping
  window.addEventListener('hashchange', scrollToTop);
};
