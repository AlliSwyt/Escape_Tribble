let score = 0;

//Objects for the Front Page Menu
const menu = document.getElementById('menu-screen');
const startButton = document.getElementById('start-button');

//Objects for the tutorial
const tutorial = document.getElementById('tutorial');
const backArrow = document.getElementById('master-back-arrow');

const bookDropDoorZoomOut = document.getElementById('bookDropDoorZoomOutPage');
const bookDropDoorZoomIn = document.getElementById('bookDropDoorZoomInPage')
const bookDropDoorHandle = document.getElementById("bookDropDoorHandlePage");
const bookDropClosed = document.getElementById('bookDropClosedPage');
const bookDropOpenKey = document.getElementById("bookDropOpenKeyPage");
const bookDropOpen = document.getElementById("bookDropOpenPage");

const bookDropDoorOpen = document.getElementById('bookDropDoorOpenPage');
const bookDropBooks = document.getElementById('bookDropBooksPage');

//booleans to track whether user has keys
let hasBookDropKey = false;
let bookDropDoorIsUnlocked = false;

//hitboxes
const bookDropHitbox = document.getElementById('bookDrop-hitbox');
const bookDropDoorHitbox = document.getElementById('bookDropDoor-hitbox');
const bookDropDoorHandleHitbox = document.getElementById("bookDropDoorHandle-hitbox");
const bookDropDoorHandleHandleHitbox = document.getElementById("bookDropDoorHandleHandle-hitbox");
const bookDropDoorHandleKeyholeHitbox = document.getElementById("bookDropDoorHandleKeyhole-hitbox");
const bookDropClosedHitbox = document.getElementById("bookDropClosed-hitbox");
const bookDropOpenHitbox = document.getElementById('bookDropOpen-hitbox');
const bookDropKeyHitbox = document.getElementById("bookDropKey-hitbox");

const bookDropBookCartHitbox = document.getElementById('bookDropBookCart-hitbox');
const doorBehindBookDropHitbox = document.getElementById('doorBehindBookDrop-hitbox');






//function to start the tutorial: runs when the player clicks the start game button
function playTutorial() {

    //FIXME add text boxes for tutorial

    //hid menu, show tutorial first page
    tutorial.classList.remove('hidden');
    goToBookDropDoorZoomOut();
    backArrow.classList.remove('hidden');

    //if they click on the door, it zooms in on it
    bookDropDoorHitbox.addEventListener('click', goToBookDropDoorZoomIn);
    //backArrow.addEventListener('click', goTo...);

    function goToBookDropDoorZoomIn() {
        //hide book drop zoomed out image
        hideAllTutorialPages();

        //show book drop zoomed in image
        bookDropDoorZoomIn.classList.remove('hidden');
        backArrow.addEventListener('click', goBack);

        bookDropHitbox.addEventListener('click', goToBookDropClosed);
        bookDropDoorHandleHitbox.addEventListener('click', goToBookDropDoorHandle);

    }

    function goToBookDropDoorZoomOut() {
        hideAllTutorialPages();
        bookDropDoorZoomOut.classList.remove('hidden');
        bookDropDoorHitbox.addEventListener('click', goToBookDropDoorZoomIn);
    }
    function goToBookDropClosed() {
        hideAllTutorialPages();
        bookDropDoorZoomIn.classList.add('hidden');
        bookDropClosed.classList.remove('hidden');

        bookDropClosedHitbox.addEventListener('click', goToBookDropOpen);

        backArrow.addEventListener('click', goBack);
    }

    function goToBookDropDoorHandle() {
        hideAllTutorialPages();
        bookDropDoorHandle.classList.remove('hidden');
        backArrow.addEventListener('click', goBack);

        bookDropDoorHandleKeyholeHitbox.addEventListener('click', unlockBookDropDoor);
        bookDropDoorHandleHandleHitbox.addEventListener('click', openBookDropDoorMaybe)
    }

    function goToBookDropOpen() {
        hideAllTutorialPages();
        backArrow.addEventListener('click', goBack)
        if (!hasBookDropKey) {
            bookDropOpenKey.classList.remove('hidden');
            bookDropKeyHitbox.addEventListener('click', collectBookDropKey)
        }
        else {
            bookDropOpen.classList.remove('hidden');
            bookDropOpenHitbox.addEventListener('click', goToBookDropClosed);
        }
    }

    function openBookDropDoorMaybe() {
        if(bookDropDoorIsUnlocked) {
            openBookDropDoor();
        }
        else {
            //fixme give feedback
        }
    }

    //fixme add functionality for back arrow here
    function openBookDropDoor() {
        hideAllTutorialPages();

        bookDropDoorOpen.classList.remove('hidden');
        //fixme add hitboxes
        //doorBehindBookDropHitbox.addEventListener('click', goToDoorBehindBookDropZoom);
        //bookDropBookCartHitbox.addEventListener('click', goToBookDropBooks);
    }

    function unlockBookDropDoor() {
        if (hasBookDropKey) {
            bookDropDoorIsUnlocked = true;
        }
        else {
            //fixme place to add feedback
        }
    }

    function collectBookDropKey() {
        hasBookDropKey = true;
        goToBookDropOpen();
    }

    function hideAllTutorialPages() {
        const pages = document.querySelectorAll('.fit');
        pages.forEach(page => page.classList.add('hidden'));
    }

    function goBack() {
        if (!bookDropDoorZoomIn.classList.contains('hidden')) {
            goToBookDropDoorZoomOut();
        }
        else if (!bookDropClosed.classList.contains('hidden')) {
            goToBookDropDoorZoomIn();
        }
        else if (!bookDropOpen.classList.contains('hidden') || !bookDropOpenKey.classList.contains('hidden')) {
            goToBookDropClosed();
        }
        else if (!bookDropDoorHandle.classList.contains('hidden')) {
            goToBookDropDoorZoomIn();
        }

    }



}



// Click functionality for menu
startButton.addEventListener('click', playTutorial);

//Clicking on objects
