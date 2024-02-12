const contact = document.querySelector('.contact-me')
const logos = document.querySelectorAll('.social-logos')
const contacts = document.querySelector('.contacts')

contact.addEventListener('click', function () {
    contact.style.display = 'none'
    contacts.style.display = 'block'
    logos.forEach(function (logo) {
        logo.style.display = 'flex'
    })
})

const learn = document.querySelector('.learn-more')
const container2 = document.querySelector('.container2')

learn.addEventListener('click', function () {
    container2.scrollIntoView({
        behavior: 'smooth'
    })

})


const scrollToProj = document.querySelector('.see-proj')
const container3 = document.querySelector('.container3')

scrollToProj.addEventListener('click', function () {
    container3.scrollIntoView({
        behavior: 'smooth'
    })
})




const projects = [
    {
        id: 1,
        title: "Movie Website",
        text: "My first ever big project for university exam. Filled with animations and fundesign.",
        link: "https://nikolozdvalishvili21.github.io/jsDvalWatch/"
    },

    {
        id: 2,
        title: "Quiz",
        text: "Fun and complex quiz with different challenges.",
        link: "https://nikolozdvalishvili21.github.io/Quiz/"
    },

    {
        id: 3,
        title: "Color Flipper",
        text: "With a single click on a button you can get random colors, even in HEX too.",
        link: "https://nikolozdvalishvili21.github.io/Color-Flipper/"
    },


    {
        id: 4,
        title: "Counter",
        text: "Just a simple counter",
        link: "https://nikolozdvalishvili21.github.io/Counter/"
    },


    {
        id: 5,
        title: "Countdown",
        text: "See how many days, hours, minutes and seconds are left until 2026 football World Cup",
        link: "https://nikolozdvalishvili21.github.io/Countdown/"
    }
]

const title = document.getElementById('proj-title')
const text = document.getElementById('about-proj')
const link = document.getElementById('project-link')

const prevBtn = document.querySelector('.prev-arrow')
const nextBtn = document.querySelector('.next-arrow')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showProject(currentItem)
})

function showProject(project) {
    const item = projects[project]
    title.textContent = item.title
    text.textContent = item.text
    link.href = item.link

    link.querySelector('h4').textContent = "See " + item.title;
}

nextBtn.addEventListener('click', function () {
    currentItem++
    showProject(currentItem)
})

prevBtn.addEventListener('click', function () {
    currentItem--
    showProject(currentItem)
})


$(window).scroll(function () {
    const container2Top = $('.container2').offset().top;

    if ($(this).scrollTop() >= container2Top) {
        $('.to-top').fadeIn(500);
        $('.to-top').css("display", "flex");
    } else {
        $('.to-top').fadeOut(500);
    }
});

$('.to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});


const britain = document.querySelector('.brit')
const georgia = document.querySelector('.geo')

const fullProj = [
    {
        id: 1,
        picture: 'Picture/IMG_1612.jpg',
        textMe: 'გამარჯობა! მე ვარ ნიკოლოზ დვალიშვილი. <br>ქართულ-ამერიკული უნივერსიტეტის (GAU) <br> <span class=school> კომპიუტერული მეცნიერებების </span> მეორე კურსის სტუდენტი. <br> ვეძებ საინტერესო გამოცდილებას ამ სფეროში.',
        button1: 'შეიტყვე მეტი',
        button2: 'დამეკონტაქტე',
        contact1: 'Icons/icons8-linkedin-50.png',
        contact2: 'Icons/icons8-facebook-50.png',
        contact3: 'Icons/icons8-github-50.png',
        contact4: 'Icons/icons8-instagram-50.png',


        title2: 'ჩემს შესახებ',
        textAbout: 'გარდა იმისა, რომ უნივერსიტეტში საკმაოდ წარმატებული აკადემიური მოსწრება მაქვს, ვცდილობ და ვიყენებ ყველა სხვა რესურსს, რომ საფუძვლიანად შევისწავლო პროგრამული ენები. შრომის შედეგად ვაპირებ მალე გავხდე პროფესიონალი ამ საქმეში. მსურს, რომ ჩემი წვლილი შევიტანო ნებისმიერი წარმატებული კომპანიის განვითარებაში.',
        scrollProjs: 'პროექტები',


        bestSkills: 'საუკეთესო ცოდნა: <span class="hc" style="color: #F06529;">Html</span>/<span class="c" style="color: #2965F1;">CSS,</span> English B2/C1,  <span style="color: #30A8FF;">Adobe Photoshop,</span>  <span style="color: #FF9B00;">Adobe Illustrator</span>',
        currentlyLearning: 'ამ დროისთვის ვსწავლობ: <span class="hc" style="color: #F0DB4F;">JavaScript, </span> <span class="c" style="color: #4584B6;">Python, </span><span style="color: #A90C7C;">AutoCad Civil</span>',
        lookingForward: 'სამომავლოდ მსურს ვისწავლო: <span class="hc" style="color: #F0DB4F;">JavaScript Frameworks, </span> <span class="c" style="color: #4584B6;">Python Frameworks, </span>  <span style="color: #484C89;">PHP, </span> <span style="color: #A279DD;">C#, </span>  <span style="color: #1463A3;">C++,</span> <span style="color: #61DBFB;">React and many more...</span>'
    },



];




const picture = document.querySelector('.picture')
const textMe = document.querySelector('.abMe')
const button1 = document.querySelector('.learn-more')
const button2 = document.querySelector('.contact-me')
const contact1 = document.querySelector('.linkedin')
const contact2 = document.querySelector('.facebook')
const contact3 = document.querySelector('.git')
const contact4 = document.querySelector('.insta')

const title2 = document.querySelector('.title-ab')
const textAbout = document.querySelector('.text-ab')
const scrollProjs = document.querySelector('.see-proj')

const bestSkills = document.querySelector('.best-skills')
const currentlyLearning = document.querySelector('.best-skills2')
const lookingForward = document.querySelector('.best-skills3')



let currentItem2 = 0



function langChange(changeLanguage) {
    const item2 = fullProj[changeLanguage]
    textMe.innerHTML = item2.textMe
    button1.textContent = item2.button1
    button2.textContent = item2.button2
    picture.style.backgroundImage = `url(${item2.picture})`
    contact1.style.backgroundImage = `url(${item2.contact1})`
    contact2.style.backgroundImage = `url(${item2.contact2})`
    contact3.style.backgroundImage = `url(${item2.contact3})`
    contact4.style.backgroundImage = `url(${item2.contact4})`


    title2.textContent = item2.title2
    textAbout.textContent = item2.textAbout
    scrollProjs.textContent = item2.scrollProjs

    bestSkills.innerHTML = item2.bestSkills
    currentlyLearning.innerHTML = item2.currentlyLearning
    lookingForward.innerHTML = item2.lookingForward
}

function langToEn(changeToEn) {
    const item2 = engProj[changeToEn]
    textMeEN.innerHTML = item2.textMeEN
    button1EN.textContent = item2.button1EN
    button2EN.textContent = item2.button2EN
    pictureEN.style.backgroundImage = `url(${item2.pictureEN})`
    contact1EN.style.backgroundImage = `url(${item2.contact1EN})`
    contact2EN.style.backgroundImage = `url(${item2.contact2EN})`
    contact3EN.style.backgroundImage = `url(${item2.contact3EN})`
    contact4EN.style.backgroundImage = `url(${item2.contact4EN})`


    title2EN.textContent = item2.title2EN
    textAboutEN.textContent = item2.textAboutEN
    scrollProjsEN.textContent = item2.scrollProjsEN

    bestSkillsEN.innerHTML = item2.bestSkillsEN
    currentlyLearningEN.innerHTML = item2.currentlyLearningEN
    lookingForwardEN.innerHTML = item2.lookingForwardEN
}


georgia.addEventListener('click', function () {
    britain.style.display = 'block'
    georgia.style.display = 'none'

    langChange(currentItem2)
});

britain.addEventListener('click', function () {
    britain.style.display = 'none'
    georgia.style.display = 'block'

    langToEn(currentItem2)
})



const engProj = [
    {
        id: 1,
        pictureEN: 'Picture/IMG_1612.jpg',
        textMeEN: 'Hello! I am Nikoloz Dvalishvili. <br> A beginner, second year student <br> who is currently learning <span class="school">Computer Science</span> <br> in Georgian-American University. <br> Looking for exciting experience in this world.</h1>',
        button1EN: 'Learn More',
        button2EN: 'Contact Me',
        contact1EN: 'Icons/icons8-linkedin-50.png',
        contact2EN: 'Icons/icons8-facebook-50.png',
        contact3EN: 'Icons/icons8-github-50.png',
        contact4EN: 'Icons/icons8-instagram-50.png',


        title2EN: 'About Me',
        textAboutEN: 'In addition to having a fairly successful academic record at university, I try and use all the other resources to thoroughly study programming languages. As a result of hard work, I intend to become a professional in this business soon. I want to contribute to the development of any successful company.',
        scrollProjsEN: 'Projects',


        bestSkillsEN: 'Best kills: <span class="hc" style="color: #F06529;">Html</span>/<span class="c" style="color: #2965F1;">CSS,</span> English B2/C1,  <span style="color: #30A8FF;">Adobe Photoshop,</span>  <span style="color: #FF9B00;">Adobe Illustrator</span>',
        currentlyLearningEN: 'Currently learning: <span class="hc" style="color: #F0DB4F;">JavaScript, </span> <span class="c" style="color: #4584B6;">Python, </span><span style="color: #A90C7C;">AutoCad Civil</span>',
        lookingForwardEN: 'Looking forward to learning: <span class="hc" style="color: #F0DB4F;">JavaScript Frameworks, </span> <span class="c" style="color: #4584B6;">Python Frameworks, </span>  <span style="color: #484C89;">PHP, </span> <span style="color: #A279DD;">C#, </span>  <span style="color: #1463A3;">C++,</span> <span style="color: #61DBFB;">React and many more...</span>'
    }
]

const pictureEN = document.querySelector('.picture')
const textMeEN = document.querySelector('.abMe')
const button1EN = document.querySelector('.learn-more')
const button2EN = document.querySelector('.contact-me')
const contact1EN = document.querySelector('.linkedin')
const contact2EN = document.querySelector('.facebook')
const contact3EN = document.querySelector('.git')
const contact4EN = document.querySelector('.insta')

const title2EN = document.querySelector('.title-ab')
const textAboutEN = document.querySelector('.text-ab')
const scrollProjsEN = document.querySelector('.see-proj')

const bestSkillsEN = document.querySelector('.best-skills')
const currentlyLearningEN = document.querySelector('.best-skills2')
const lookingForwardEN = document.querySelector('.best-skills3')




$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY >= 300) {
            $('.title-ab').addClass('animate');
        } else {
            $('.title-ab').removeClass('animate');
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY >= 350) {
            $('.text-ab').addClass('animate');
        } else {
            $('.text-ab').removeClass('animate');
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY >= 600) {
            $('.see-proj').addClass('animate');
        } else {
            $('.see-proj').removeClass('animate');
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY >= 800) {
            $('.projects').addClass('animate');
        } else {
            $('.projects').removeClass('animate');
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY >= 800) {
            $('.arrow-down').addClass('animate');
        } else {
            $('.arrow-down').removeClass('animate');
        }
    });
});
