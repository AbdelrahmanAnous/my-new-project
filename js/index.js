$('#openIcon').click(function () {
    let navWidth = $('#navIcon').outerWidth();
    console.log(navWidth)
    let iconWidth = $('#sideNav').outerWidth();
    console.log(iconWidth)

    let position = $('.navIcon').offset().left; //بيرجعلي رقم 
    // console.log(position)
    if (position == 0) {
        $('#sideNav').css({
            left: `-250px`,
            transition: 'all 1s'
        })
    } else {
        $('#sideNav').css({
            left: `0`,
            transition: 'all 1s'
        })
    }

})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        400: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 2
        }
    }
})
let asideBtn = document.getElementById('asideBtn')

asideBtn.addEventListener("click", (eo) => {
    aside.style.display = 'block'
    Msuic.style.padding
    console.log('abdelrahman')
})
function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
