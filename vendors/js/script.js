var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1080: {
          slidesPerView: 4,
      },
        1329: {
          slidesPerView: 5,
      },
    },
  });

function showProduct(){
  closeIntegrations();
  closeResources();
  document.getElementById('product').style.visibility = "visible";
}
function closeProduct(){
  
  document.getElementById('product').style.visibility = "hidden";
}

function showIntegrations(){
  closeProduct();
  closeResources();
  document.getElementById('integrations').style.visibility = "visible";
}
function closeIntegrations(){
  document.getElementById('integrations').style.visibility = "hidden";
}

function closeAll(){
  closeIntegrations();
  closeProduct();
  closeResources();
}

function showResources(){
  closeIntegrations();
  closeProduct();
  document.getElementById('resources').style.visibility = "visible";
}
function closeResources(){
  document.getElementById('resources').style.visibility = "hidden";
}

function dropProduct(){
  document.getElementById('dropdown-product').style.display = "block";
  closeDropdownResourcese();
  closeDropdownIntegrations();
}

function dropIntegrations(){
  document.getElementById('dropdown-integrations').style.display = "block";
  closeDropdownProduct();
  closeDropdownResourcese();
}

function dropResources(){
  document.getElementById('dropdown-resources').style.display = "block";
  closeDropdownIntegrations();
  closeDropdownProduct();
}

function closeDropdownProduct(){
  document.getElementById('dropdown-product').style.display = "none";
}

function closeDropdownIntegrations(){
  document.getElementById('dropdown-integrations').style.display = "none";
  
}

function closeDropdownResourcese(){
  document.getElementById('dropdown-resources').style.display = "none";
  
}

function closeDropdowns(){
  closeDropdownResourcese();
  closeDropdownIntegrations();
  closeDropdownProduct();
}

function showMenu(){
  if(document.getElementById('main-content').style.display == "none"){
    document.getElementById('vertical-menu').style.display = "none";
    document.getElementById('main-content').style.display = "block";
    document.getElementById('menu-img').src = "vendors/images/menu/menu.png";
  }
  else{
    document.getElementById('main-content').style.display = "none";
    document.getElementById('vertical-menu').style.display = "block";
    document.getElementById('menu-img').src = "vendors/images/menu/close.png";
  }
  
}


