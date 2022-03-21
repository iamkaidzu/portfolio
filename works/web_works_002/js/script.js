// HTMLの内容も記載
'use strict'
/*------------
loader
------------*/
function loading() {
  const $loader = document.getElementById('loader')
  const $works_main = document.getElementById('works_main')
  window.addEventListener('load', () => {
    $loader.classList.add('on')
    $works_main.classList.add('on')
  })
}
loading()
/*------------
hum_btn hum_nav
------------*/
function hum_menu() {
  // 要素の取得
  const $hum_btn = document.querySelector('.hum_btn')
  const $in = $hum_btn.querySelector('.in')
  const $hum_btn_div = document.querySelectorAll('.hum_btn .in div')
  const $hum_nav = document.querySelector('.hum_nav')
  const $jump_link = document.querySelectorAll('.hum_nav ul li a')
  // hum_btnをクリックしたら
  $hum_btn.addEventListener('click', () => {
    $in.classList.toggle('on')
    $hum_nav.classList.toggle('on')
  })
  // hum_navのaタグ以外をクリックしたら
  $hum_nav.addEventListener('click', (e) => {
    for (let i = 0; i < $jump_link.length; i++) {
      if (e.target !== $jump_link[i]) {
        $hum_btn.classList.remove('on')
        $in.classList.remove('on')
        e.target.classList.remove('on')
      } else {
        //何もしない
      }
    }
  })
  // hum_navのaタグをクリックしたら
  for (let i = 0; i < $jump_link.length; i++) {
    $jump_link[i].addEventListener('click', () => {
      $hum_nav.classList.remove('on')
    })
  }
}
hum_menu()

/*------------
cont_person
------------*/
function cont_person() {
  const $frame = document.querySelector('#works_person .cont_person .frame')
  const items = [
    { "num": "01", "ttl_01": "課題に", "ttl_02": "噛み付く。", "name": "KAIDZU KOUSUKE", "ocp": "DIRECTOR", "year": "2022", "img": "./img/img_001.JPG" },
    { "num": "02", "ttl_01": "仕事に", "ttl_02": "噛み付く。", "name": "KAIDZU KOUSUKE", "ocp": "PRODUCER", "year": "2023", "img": "https://images.unsplash.com/photo-1585022564445-3523e9b75f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { "num": "03", "ttl_01": "空白に", "ttl_02": "噛み付く。", "name": "KAIDZU KOUSUKE", "ocp": "DESIGNER", "year": "2024", "img": "./img/img_002.JPG" },
    { "num": "04", "ttl_01": "ライバルに", "ttl_02": "噛み付く。", "name": "KAIDZU KOUSUKE", "ocp": "ENGINEER", "year": "2025", "img": "./img/img_003.JPG" },
    { "num": "05", "ttl_01": "技術に", "ttl_02": "噛み付く。", "name": "KAIDZU KOUSUKE", "ocp": "DIRECTOR", "year": "2026", "img": "./img/img_004.JPG" }
  ]
  for (let i = 0; i < items.length; i++) {
    $frame.innerHTML += `
    <section class="fadeIn">
      <a href="#" class="person_ttl fadeIn_txt">
        <h2>${items[i].num}</h2>
        <h3>${items[i].ttl_01}<br>${items[i].ttl_02}</h3>
        <p>${items[i].name}<br>${items[i].ocp}<br>${items[i].year}年入社</p>
      </a>
      <a href="#" class="person_img fadeIn_img">
        <figure><img src="${items[i].img}"></figure>
      </a>
    </section>
  `
  }
}
cont_person()
/*------------
cont_project
------------*/
function cont_project() {
  const $frame = document.querySelector('#works_project .cont_project .frame')
  const items = [
    { "num": "01", "ttl_01": "当たり前に噛み付く。", "pjt": "iamKaidzu", "com": "DIRECTOR", "img": "https://images.unsplash.com/photo-1598343661787-2c74b56d87f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80" },
    { "num": "02", "ttl_01": "新たな日常に噛み付く。", "pjt": "iamKaidzu", "com": "PRODUCER", "img": "https://images.unsplash.com/photo-1586014718688-58c5c6f6c13d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
    { "num": "03", "ttl_01": "守備範囲に噛み付く。", "pjt": "iamKaidzu", "com": "DESIGNER", "img": "https://images.unsplash.com/photo-1585022762780-b316ed8a5964?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80" },
    { "num": "04", "ttl_01": "境界線に噛み付く。", "pjt": "iamKaidzu", "com": "ENGINEER", "img": "https://images.unsplash.com/photo-1585049990146-8a3d5b64e5b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { "num": "05", "ttl_01": "現状維持に噛み付く。", "pjt": "iamKaidzu", "com": "DIRECTOR", "img": "https://images.unsplash.com/photo-1633093230485-b90b93ae9f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
    { "num": "06", "ttl_01": "明日に噛み付く。", "pjt": "iamKaidzu", "com": "DIRECTOR", "img":"https://images.unsplash.com/photo-1615050989483-6f530354d759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1848&q=80"}
  ]
  for (let i = 0; i < items.length; i++) {
    $frame.innerHTML += `
    <section class="fadeIn">
      <a href="#" class="project_img fadeIn_img">
        <figure><img src="${items[i].img}"></figure>
      </a>
      <a href="#" class="project_ttl">
        <h2 class="fadeIn_txt">${items[i].num}</h2>
        <div class="project_ttl_txt fadeIn_txt">
          <h3>${items[i].ttl_01}</h3>
          <p>${items[i].pjt}</p>
          <p>${items[i].com}</p>
        </div>
      </a>
    </section>
  `
  }
}
cont_project()

/* --------------------------------
スクロールアニメーション関数
------------------------------------ */
/* 
* 第１引数：classの指定（ドットを必ず付けること）
* 第２引数：発火してから付与されるclassの指定
* 第３引数：発火タイミング（下から何ピクセルか？）
*/
const Scroll_Anime = ($class = '.fadeIn', $on_class = 'true', $px = "200") => {
  const $fadeIn = document.querySelectorAll($class)
  if ($fadeIn) {
    window.addEventListener('scroll', () => {
      // スクロール量を取得
      let scrollY = window.scrollY;
      // ウィンドウの高さを取得
      let $win_h = document.documentElement.clientHeight;
      for (let a = 0; a < $fadeIn.length; a++) {
        // 各要素の位置を取得
        let offsetTop = $fadeIn[a].offsetTop
        // 要素がウィンドウの高さ-$pxの位置に来たらclassを付与する
        if (scrollY + $win_h - $px > offsetTop) {
          $fadeIn[a].classList.add($on_class)
        } else {
          $fadeIn[a].classList.remove($on_class)
        }
      }
    })
  }
  return
}
Scroll_Anime()
Scroll_Anime('.fadeIn_img', 'true', '90')
Scroll_Anime('.fadeIn_txt', 'true', '90')