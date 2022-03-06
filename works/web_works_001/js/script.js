// HTMLの内容も記載
'use strict'
/*------------
hum_btn
------------*/
function hum_btn() {
  // 要素の取得
  const $hum_btn = document.getElementById('hum_btn')
  const $sp_nav = document.getElementById('sp_nav')
  const $jump_link = $sp_nav.querySelectorAll('ul li a')
  // hum_btnをクリックしたら
  $hum_btn.addEventListener('click', () => {
    $hum_btn.classList.toggle('on')
    $sp_nav.classList.toggle('on')
  })
  // hum_navのaタグ以外をクリックしたら
  $sp_nav.addEventListener('click', (e) => {
    for (let i = 0; i < $jump_link.length; i++) {
      if (e.target !== $jump_link[i]) {
        $hum_btn.classList.remove('on')
        $sp_nav.classList.remove('on')
        e.target.classList.remove('on')
      } else {
        //何もしない
      }
    }
  })
  // hum_navのaタグをクリックしたら
  for (let i = 0; i < $jump_link.length; i++) {
    $jump_link[i].addEventListener('click', () => {
      $sp_nav.classList.remove('on')
    })
  }
}
hum_btn()

/*------------
cont_philosophy
------------*/
function cont_philosophy() {
  const $cont_philosophy = document.getElementById('cont_philosophy')
  const items = [
    {"icon":"fab fa-pagelines","ttl":"Make your dream","txt":"We want to help you with that.<br>What would you like to be in a year?<br>Let's design the future with us while thinking about it."},
    {"icon":"far fa-check-circle","ttl":"Make your dream","txt":"We want to help you with that.<br>What would you like to be in a year?<br>Let's design the future with us while thinking about it."},
    {"icon":"fas fa-globe","ttl":"Make your dream","txt":"We want to help you with that.<br>What would you like to be in a year?<br>Let's design the future with us while thinking about it."}
  ]
  for (let i = 0; i < items.length; i++) {
    $cont_philosophy.innerHTML += `
      <section>
        <i class="${items[i].icon}"></i>
        <h1>${items[i].ttl}</h1>
        <p>${items[i].txt}</p>
      </section>
    `
  }
}
cont_philosophy()

/*------------
cont_vision
------------*/
function cont_vision(){
  const $cont_vision = document.getElementById('cont_vision')
  const $frame = $cont_vision.querySelector('.frame')
  const items = [
    {"ttl":"Why we're different","txt":"Houseplants are really good, aren't they? I love it. I will introduce it from now on so that everyone can know the goodness of foliage plants!","icon":"fas fa-chevron-down","img":"./img/img_002.jpg"},
    {"ttl":"Why we're different","txt":"Houseplants are really good, aren't they? I love it. I will introduce it from now on so that everyone can know the goodness of foliage plants!","icon":"fas fa-chevron-down","img":"./img/img_003.jpg"},
    {"ttl":"Why we're different","txt":"Houseplants are really good, aren't they? I love it. I will introduce it from now on so that everyone can know the goodness of foliage plants!","icon":"fas fa-chevron-down","img":"./img/img_004.jpg"},
    {"ttl":"Why we're different","txt":"Houseplants are really good, aren't they? I love it. I will introduce it from now on so that everyone can know the goodness of foliage plants!","icon":"fas fa-chevron-down","img":"./img/img_005.jpg"}
  ]
  for (let i = 0; i < items.length; i++) {
    $frame.innerHTML += `
      <section>
        <div class="cont_txt">
          <div class="in">
            <h1>${items[i].ttl}</h1>
            <p>${items[i].txt}</p>
            <a class="btn" href="#"><i class="${items[i].icon}"></i></a>
          </div>
        </div>
        <div class="cont_img">
          <figure><img src="${items[i].img}"></figure>
        </div>
      </section>
    `
  }
}
cont_vision()

/*------------
cont_faq
------------*/
function cont_faq() {
  const $faq_list = document.querySelector('#cont_faq dl')
  const lists = [
    {
      "q": "How long does it take from order to delivery?",
      "a": "It takes about 2 to 3 days."
    },
    {
      "q": "How long does it take from order to delivery?",
      "a": "It takes about 2 to 3 days."
    },
    {
      "q": "How long does it take from order to delivery?",
      "a": "It takes about 2 to 3 days."
    },
    {
      "q": "How long does it take from order to delivery?",
      "a": "It takes about 2 to 3 days."
    },
    {
      "q": "How long does it take from order to delivery?",
      "a": "It takes about 2 to 3 days."
    }
  ]
  for (let i = 0; i < lists.length; i++) {
    $faq_list.innerHTML += `
      <dt>${lists[i].q}</dt>
      <dd>${lists[i].a}</dd>
    `
  }
  let $dt = $faq_list.querySelectorAll('dt')
  let $dd = $faq_list.querySelectorAll('dd')
  for (let i = 0; i < lists.length; i++) {
    $dt[i].addEventListener('click' , () =>{
      $dt[i].classList.toggle('on')
      $dd[i].classList.toggle('on')
    })
  }
}
cont_faq()