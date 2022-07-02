

// ! Additional features----> smooth scrolling

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smoother = ScrollSmoother.create({
//     wrapper: '#smooth-wrapper' ,
//     content: '#smooth-content',
//     smooth:3
// })



// // ! Additional features----> Preloader
// let $ = (e) => document.querySelector(e);

// // Dots
// // ====
// let dots = $(".dots");

// // Function
// // ========
// function animate(element, className) {
//     element.classList.add(className);
//     setTimeout(() => {
//         element.classList.remove(className);
//         setTimeout(() => {
//             animate(element, className);
//         }, 500);
//     }, 2500);
// }

// // Execution
// // =========
// animate(dots, "dots--animate");









// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelector('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


//? Removing active class from all the menu Items
const changeActiveItem = ()=>{
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display ='none';
        }
    })
})




// ========================MESSAGES========================
//! search chats
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1 ){
            chat.style.display = 'Flex';
        }else{
            chat.style.display = 'none';
        }
    })
}
// search chat
messageSearch.addEventListener('keyup', searchMessage);

 

//? Highlighting messages when it is clicked
messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
    // console.log("hello");
})




// THEME PLUS DISPLAy CUSTOMIZATION
// open modal
const openThemeModal = ()=> {
    themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) =>{
    if (e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

// Open-close modal
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


// =====================fonts=======================
fontSizes.forEach(size =>{
    let fontSize;

    size.addEventListener('click', ()=>{
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
        }

    })


    // change font size of the root 
    document.querySelector('html').style.fontSize = fontSize;
})

// remove ACTIVE class from colors
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if (color.classList.contains('colot-2')){
            primaryHue = 52;
        }else if (color.classList.contains('colot-3')){
            primaryHue = 352;
        } else if (color.classList.contains('colot-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('colot-5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})




// theme background color values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changing the background 
const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);

}

Bg1.addEventListener('click', () =>{
    // adding active class
    Bg1.classList.add('active');

    // remove active class
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    darkColorLightness = '15%';

    // adding active class
    Bg2.classList.add('active');

    // remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

})



Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    darkColorLightness = '0%';

    // adding active class
    Bg3.classList.add('active');

    // remove active class
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

})