# Software_Developement

[![Issues](https://img.shields.io/github/issues/chait04/Software_Developement
)](#issues)
[![forks](https://img.shields.io/github/forks/chait04/Software_Developement
)](#forks)

# Pratice questions for <a href="https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php">javascript</a>

##  Getting Started 👨‍💻

# Some HelpFull code snippet in javascript ... credit :- 30secondsOfCode

#### 1.How to hide all elements specified?
 <code> const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

// Example
hide(document.querySelectorAll('img')); // Hides all <img> elements on the page </code>

#### 2.How to check if the element has the specified class?
<code> const hasClass = (el, className) => el.classList.contains(className);

// Example
hasClass(document.querySelector('p.special'), 'special'); // true </code>

#### 3.How to toggle a class for an element?
<code> const toggleClass = (el, className) => el.classList.toggle(className);

// Example
toggleClass(document.querySelector('p.special'), 'special'); 
// The paragraph will not have the 'special' class anymore </code>

#### 4.How to get the scroll position of the current page?
<code> const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// Example
getScrollPosition(); // {x: 0, y: 200} </code>

#### 5.How to smooth-scroll to the top of the page?
<code>  const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// Example
scrollToTop(); </code>

#### 6.How to check if the parent element contains the child element?
<code> const elementContains = (parent, child) => parent !== child && parent.contains(child);

// Examples
elementContains(document.querySelector('head'), document.querySelector('title')); 
// true
elementContains(document.querySelector('body'), document.querySelector('body')); // false </code>

#### 7.How to check if the element specified is visible in the viewport?
<code> const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// Examples
elementIsVisibleInViewport(el); // (not fully visible)
elementIsVisibleInViewport(el, true); // (partially visible) </code>

#### 8.How to fetch all images within an element?
<code> const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};

// Examples
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...'] </code>

#### 9.How to figure out if the device is a mobile device or a desktop/laptop?
<code> const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

// Example
detectDeviceType(); // "Mobile" or "Desktop" </code>

#### 10.How to get the current URL?

<code> const currentURL = () => window.location.href;

// Example
currentURL(); // 'https://google.com' </code>

#### 11.How to create an object containing the parameters of the current URL?
<code> const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );

// Examples
getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
getURLParameters('google.com'); // {} </code>

#### 12.How to encode a set of form elements as an object?
<code> const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );

// Example
formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' } </code>

#### 13.How to retrieve a set of properties indicated by the given selectors from an object?

<code> const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

// Example
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test'] </code>

#### 14.How to invoke the provided function after wait (in milliseconds)?
<code> </code>

#### 15.How to trigger a specific event on a given element, optionally passing custom data?
<code> const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }));

// Examples
triggerEvent(document.getElementById('myId'), 'click');
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });</code>


#### 16.How to remove an event listener from an element?
<code> const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);

const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page </code>


#### 17.How to get readable format of the given number of milliseconds?
<code> const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};

// Examples
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds' </code>


#### 18.How to get the difference (in days) between two dates?
<code> const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

// Example
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9 </code>


#### 19.How to make a GET request to the passed URL?
<code> const httpGet = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};

httpGet(
  'https://jsonplaceholder.typicode.com/posts/1',
  console.log
); 

// Logs: {"userId": 1, "id": 1, "title": "sample title", "body": "my text"} </code>


#### 20.How to make a POST request to the passed URL?
<code>const httpPost = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};

const newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  console.log
); 

// Logs: {"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"} </code>

#### 21.How to create a counter with the specified range, step and duration for the specified selector?
<code> const counter = (selector, start, end, step = 1, duration = 2000) => {
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};

// Example
counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id" </code>

#### 22.How to copy a string to the clipboard?
<code> const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

// Example
copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard. </code>

#### 23.How to find out if the browser tab of the page is focused?
<code> const isBrowserTabFocused = () => !document.hidden;

// Example
isBrowserTabFocused(); // true </code>

#### 24.How to create a directory, if it does not exist?
<code>const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

// Example
createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist </code>


# Thats some Pure shitt.. Happy Coding ( Thanks to medium community " THE STARTUP " )

### Follow the directories

* Advanced Javascript by Frontend masters (Best - codesmith) .
* Javascript Essentials ( Linkdin Learning )
* OOps in js ( Youtube collections with object literals )
* Programming Fundamentals ( In python - pratice exercise )
* js pratice questions
<code> HAPPY LEARNING </code>