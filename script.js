let score = 0;

//Objects for the Front Page Menu
const menu = document.getElementById('menu-screen');
const startButton = document.getElementById('start-button');

//Objects for the tutorial
const tutorial = document.getElementById('tutorial');
const backArrow = document.getElementById('master-back-arrow');

const bookDropDoorZoomOut = document.getElementById('bookDropDoorZoomOutPage');
const bookDropDoorZoomIn = document.getElementById('bookDropDoorZoomInPage')
const bookDropDoorHitbox = document.getElementById('bookDropDoor-hitbox');
const bookDrop = document.getElementById('bookDropClosedPage');
const bookDropHitbox = document.getElementById('bookDrop-hitbox');
const bookDropDoorHandleHitbox = document.getElementById("bookDropDoorHandle-hitbox");
const bookDropDoorHandle = document.getElementById("bookDropDoorHandlePage");





//function to start the tutorial: runs when the player clicks the start game button
function playTutorial() {

    //FIXME add text boxes for tutorial

    //hid menu, show tutorial first page
    menu.classList.add('hidden');
    tutorial.classList.remove('hidden');
    bookDropDoorZoomOut.classList.remove('hidden');
    backArrow.classList.remove('hidden'); //fixme currently no functionality, want it to back up to view the hallway later ? or maybe remove for this image

    //if they click on the door, it zooms in on it
    bookDropDoorHitbox.addEventListener('click', goToBookDropDoorZoomIn);
    //backArrow.addEventListener('click', goTo...);

    function goToBookDropDoorZoomIn() {

        //hide book drop zoomed out image
        hideAllTutorialPages();

        //show book drop zoomed in image
        bookDropDoorZoomIn.classList.remove('hidden');
        backArrow.addEventListener('click', goToBookDropDoorZoomOut);

        bookDropHitbox.addEventListener('click', goToBookDrop);
        bookDropDoorHandleHitbox.addEventListener('click', goToBookDropDoorHandle);

    }

    function goToBookDropDoorZoomOut() {
        hideAllTutorialPages();
        bookDropDoorZoomOut.classList.remove('hidden');
        bookDropHitbox.addEventListener('click', goToBookDrop);
        bookDropDoorHandleHitbox.addEventListener('click', goToBookDropDoorHandle);

    }
    function goToBookDrop() {
        hideAllTutorialPages();
        bookDropDoorZoomIn.classList.add('hidden');
        bookDrop.classList.remove('hidden');
    }

    function goToBookDropDoorHandle() {
        hideAllTutorialPages();
        bookDropDoorZoomIn.classList.add('hidden');
        bookDropDoorHandle.classList.remove('hidden');
    }

    function hideAllTutorialPages() {
        const pages = document.querySelectorAll('.fit');
        pages.forEach(page => page.classList.add('hidden'));
    }

}



// Click functionality for menu
startButton.addEventListener('click', playTutorial);

//Clicking on objects
