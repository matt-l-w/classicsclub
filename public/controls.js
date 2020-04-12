function changeTheme(colour) {
  var el = document.body;

  el.style.setProperty('background-color', "var(--background-"+colour+")");
  el.style.setProperty('color', "var(--font-"+colour+")");
}

function setLight() {
  changeTheme('light');
}
function setSepia() {
  changeTheme('sepia');
}
function setDark() {
  changeTheme('dark');
}

// scroll saver
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function saveY() {
  if (storageAvailable('localStorage')) {
    var pageY = window.scrollY;
    window.localStorage.ypos = pageY;
  }
}

function reloadY() {
  if (storageAvailable('localStorage')) {
    var storedY = window.localStorage.ypos;
    if (storedY) {
      window.scrollTo({
        top: storedY,
        behavior: 'smooth'
      });
    }
  }
}

document.onscroll = saveY;
window.addEventListener('DOMContentLoaded', (event) => {
  reloadY();
});