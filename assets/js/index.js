//parallax
// window.addEventListener('scroll', function () {
//     const bg = document.querySelector('.parallax');
//     const num = scrollY * 0.02;
//     bg.style.top = `-${num}%`;
// })
// accordion swiper
var swiper_accordion = new Swiper(".accordion_swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class=${className}></span>`
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});
// accordion layout
const pcLayout = document.querySelector('.accordion-inner');
const mobileLayout = document.querySelector('.m-accordion-inner');

if (window.matchMedia('(max-width:1024px)').matches) {
    pcLayout.style.display = 'none';
    mobileLayout.style.display = 'block';
} else {
    pcLayout.style.display = 'flex';
    mobileLayout.style.display = 'none';
}
// accordion layout resize 
window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width:1024px)').matches) {
        pcLayout.style.display = 'none';
        mobileLayout.style.display = 'block';
    } else {
        pcLayout.style.display = 'flex';
        mobileLayout.style.display = 'none';
    }
});
// Masonry.js & imagesLoaded.js
const grid = document.querySelector('.masonry');
const grid2 = document.querySelector('.masonry2');
const targetArr = [];
targetArr.push(grid);
targetArr.push(grid2);
for (var layout of targetArr) {
    // image lazy
    imagesLoaded(layout, () => {
        targetArr.forEach( e => {
            const masonry = new Masonry(e, {
                itemSelector: '.masonry-item',
                gutter: 0,
                // horizontalOrder: true,
            });
            // masonry.on('layoutComplete', () => console.log('callback'))
        })
        // AOS;
        AOS.init({
            duration: 1000,
            once: true,
        });
    })
}
window.addEventListener('resize', () => {
const grid = document.querySelector('.masonry');
const grid2 = document.querySelector('.masonry2');
const targetArr = [];
targetArr.push(grid);
targetArr.push(grid2);
for (var layout of targetArr) {
    // image lazy
    imagesLoaded(layout, () => {
        targetArr.forEach( e => {
            const masonry = new Masonry(e, {
                itemSelector: '.masonry-item',
                gutter: 0,
                // horizontalOrder: true,
            });
            // masonry.on('layoutComplete', () => console.log('callback'))
        })
        // AOS;
        AOS.init({
            duration: 1000,
            once: true,
        });
    })
}
})
// nav
const menu = document.querySelector('.menu-inner');
const nav = document.querySelector('.nav_menu');
const navClose = document.querySelector('.nav_close');
menu.addEventListener('click', () => {
    nav.classList.add('active');
    setTimeout(() => {
        document.querySelector('.nav_menu_list').classList.add('active');
    }, 300)
})
navClose.addEventListener('click', closeNav)
document.querySelectorAll('section').forEach((sectionAll) => {
    sectionAll.addEventListener('click', closeNav)
})
// navClose
function closeNav() {
    nav.classList.remove('active');
    document.querySelector('.nav_menu_list').classList.remove('active');
}
// nav list 활성화
const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.nav_menu_list a');
window.addEventListener('scroll', () => {
    //section offsetTop
    let currentSection;
    sections.forEach(sec => {
        const offsetValue = sec.offsetTop - 1;
        if (scrollY >= offsetValue) {
            currentSection = sec.id;
        }
    })
    navBtns.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') == `#${currentSection}`) {
            item.classList.add('active');
        }
    })
})
const navLists = document.querySelectorAll('.nav_menu_list li');
const subMenu = document.querySelector('.sub_menu');
navLists.forEach((list, idx) => {
    list.addEventListener('click', function () {
        subMenu.classList.toggle('active');
    })
})
// smooth scroll
const targetEl = document.querySelectorAll(`[href*='sec']`);
targetEl.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        // 콜백
        function delay(callback) {
            callback();
        }
        delay(() => {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    x: 0,
                    y: `${anchor.getAttribute('href')}`,
                    ease: "power3.out"
                },
                // gsap callback
                onComplete: () => {
                    closeNav();
                }
            })
        })
    })
})

var swiper_photo = new Swiper(".swiper_gallery", {
    speed: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class=${className}></span>`
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// swiper gallery
// 스크롤 disable
let beforeScrollPosition = 0;
let popupOpenType = false;
window.addEventListener('scroll', () => {
    const htmlEl = document.getElementsByTagName('html')[0];
    if (popupOpenType) {
        htmlEl.scrollTop = beforeScrollPosition;
    } else {
        beforeScrollPosition = htmlEl.scrollTop;
    }
});
const slideClose = document.querySelectorAll('.close');
slideClose.forEach( e => {
    e.addEventListener('click', () => {
        document.querySelectorAll('.swiper_gallery').forEach( e => {
            e.classList.remove('active');
        })
        popupOpenType = false;
    })
})
const projects = document.querySelectorAll('.pf_masonry a');
projects.forEach( (e,idx) => {
    e.addEventListener('click', () => {
        document.querySelectorAll(`.swiper_gallery`)[idx].classList.add('active');
        // const body = document.querySelector('body');
        // body.style.overflow = 'hidden'
        popupOpenType = true;
    })
})
// 페이지네이션
const galleryImg = document.querySelectorAll('.swiper_gallery img');
galleryImg.forEach( (e,idx) => {
    let imgSrc = e.dataset.imgsrc;
    const swiperThumbNail = document.querySelectorAll(`.swiper_gallery .swiper-pagination span`);
    swiperThumbNail[idx].style.background = `url('${imgSrc}') no-repeat center center / cover`;
})
