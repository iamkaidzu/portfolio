// HTMLも記述
'use strict'
/*------------
loader
------------*/
function loading() {
  const $loader = document.getElementById('loader')
  const $portfolio_main = document.getElementById('portfolio_main')
  window.addEventListener('load', () => {
    $loader.classList.add('on')
    $portfolio_main.classList.add('on')
  })
}
loading()

/*-------------------------------
スクロールアニメーション hdr_right部分
-------------------------------*/
function scroll_ttl() {
  const $cont_ttl = document.getElementById('cont_ttl')
  // それぞれのcontのエレメントとタイトルを取得
  const $items = [
    {"cont":"fv","ttl":"HOME"},
    {"cont":"profile","ttl":"PROFILE"},
    {"cont":"skill","ttl":"SKILL"},
    {"cont":"concept","ttl":"CONCEPT"},
    {"cont":"works","ttl":"WORKS"}
  ]
  window.addEventListener('scroll', () => {
    const win_h = document.documentElement.clientHeight //ウィンドウの高さ取得
    const win_h_2 = win_h / 2 //ウィンドウの高さ÷2
    for (let i = 0; i < $items.length; i++) {
      let $areas = document.getElementById(`cont_${$items[i].cont}`)
      let $cont_top = $areas.offsetTop
      let $area = window.scrollY - $cont_top //スクロール量 - コンテンツ(上から何pxか)
      if ($area > win_h_2) {
        $cont_ttl.innerText = `${$items[i].ttl}`
      }
      if (window.scrollY < win_h_2) {
        $cont_ttl.innerText = `${$items[0].ttl}`
      }
    }
  })
}
scroll_ttl()

/*------------
hum_nav
------------*/
function hum_menu() {
  // 要素の取得
  const $hum_btn = document.querySelector('.hum_btn')
  const $hum_btn_div = document.querySelectorAll('.hum_btn .in div')
  const $hum_nav = document.querySelector('.hum_nav')
  const $jump_link = document.querySelectorAll('.hum_nav ul li a')
  // hum_btnをクリックしたら
  $hum_btn.addEventListener('click', () => {
    $hum_btn.classList.toggle('on')
    $hum_nav.classList.toggle('on')
    for (let i = 0; i < $hum_btn_div.length; i++) {
      $hum_btn_div[i].classList.add('on')
    }
  })
  // hum_navのaタグ以外をクリックしたら
  $hum_nav.addEventListener('click', (e) => {
    for (let i = 0; i < $jump_link.length; i++) {
      if (e.target !== $jump_link[i]) {
        $hum_btn.classList.remove('on')
        e.target.classList.remove('on')
        for (let a = 0; a < $hum_btn_div.length; a++) {
          $hum_btn_div[a].classList.remove('on')
        }
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
profile
------------*/
function cont_profile() {
  const $cont_profile = document.getElementById('cont_profile')
  const $btn = $cont_profile.querySelector('section .profile_img .btn i')
  const $profile_txt = $cont_profile.querySelector('section .profile_txt')
  const items = [
    { "q": "Name", "a": "Kaizdu Kousuke" },
    { "q": "Age", "a": "26" },
    { "q": "Birth", "a": "1995 / 10 /11" },
    { "q": "Sex", "a": "Man" },
    { "q": "From", "a": "Tokyo Akishima City" },
    { "q": "Comment", "a": "前職の経理部にてRPAを実装した経験から、プログラミングに興味を持ちました。<br>未経験ながらも即戦力になれるよう、「現場ではどうしているんだろう」を常に考えながらコーディングをしてきました。現状維持ではなく、成長を意識することで新しい知識を蓄えコーディング力を鍛えました。<br>改修などの際に見やすいよう余計なコードは書かずにクオリティの高い作品を作ることをモットーとしています。" },
  ]
  for (let i = 0; i < items.length; i++) {
    $profile_txt.innerHTML += `
      <dl>
        <dt>${items[i].q}</dt>
        <dd>${items[i].a}</dd>
      </dl>
    `
  }
  $btn.addEventListener('click', () => {
    $cont_profile.classList.toggle('on')
    $btn.classList.toggle('on')
    $profile_txt.classList.toggle('on')
  })
}
cont_profile()
/*------------
skill
------------*/
function cont_skill() {
  const $cont_skill = document.getElementById('cont_skill')
  const items = [
    { "img": "./img/html-css.png", "ttl": "HTML / CSS" },
    { "img": "./img/js.svg", "ttl": "Java Script" },
    { "img": "./img/adobe-xd.svg", "ttl": "XD" },
    { "img": "./img/sass.svg", "ttl": "Sass" },
    { "img": "./img/jq.svg", "ttl": "JQuery" },
    { "img": "./img/gsap-greensock.svg", "ttl": "GSAP" }
  ]
  for (let i = 0; i < items.length; i++) {
    $cont_skill.innerHTML += `
      <section>
        <div class="skill_img">
          <figure class="fadeIn_img"><img src="${items[i].img}" alt=""></figure>
        </div>
        <div class="skill_txt">
          <h1>${items[i].ttl}</h1>
        </div>
      </section>
    `
  }
}
cont_skill()

/*------------
concept
------------*/
function cont_concept() {
  const $cont_concept = document.getElementById('cont_concept')
  const items = [
    { "num": "01", "ttl": "丁寧で見やすいコーディング", "txt_01": "無駄なコードを書かず、綺麗なコードを書くことを心がけています。", "txt_02": "0からコーディングするときも、改修を行うことを念頭に置いて必要最低限なコードで書くようにしています。", "img": "./img/img_001-01.jpg" },
    { "num": "02", "ttl": "HTMLを汚さない", "txt_01": "HTMLに余計な要素を入れないようにしています。", "txt_02": "CSSやJavaScript等で代用できる部分はなるべくそれで補い、HTMLを汚さないようにしています。", "img": "./img/img_001-02.jpg" },
    { "num": "03", "ttl": "スキルアップに貪欲に", "txt_01": "日々、技術がアップデートされていくフロントエンドの世界。", "txt_02": "持っている知識を最大限活かしつつも、それに執着せず新しい技術を積極的に習得することで自らのスキルを日々アップデートしています。", "img": "./img/img_001-03.jpg" }
  ]
  for (let i = 0; i < items.length; i++) {
    $cont_concept.innerHTML += `
      <section>
        <div class="concept_txt">
          <div class="ttl">
            <h1>${items[i].num}<span>${items[i].ttl}</span></h1>
          </div>
          <div class="txt">
            <p>
              ${items[i].txt_01}<br>
              ${items[i].txt_02}<br>
            </p>
          </div>
        </div>
        <div class="concept_img">
          <figure class="fadeIn_img"><img src="${items[i].img}" alt=""></figure>
        </div>
      </section>
    `
  }
}
cont_concept()

/*------------
works
------------*/
function cont_works() {
  const $cont_works = document.getElementById('cont_works')
  const items = [
    { "img_pc": "./img/img_003.jpg", "img_sp": "./img/img_004.png", "ttl": "Web", "link": "http://kskaidu1011.xsrv.jp/demo/works_001/", "skill": "HTML / CSS/ JavaScript /GSAP", "ingenuty_01": "繰り返しの処理を効率良く記述すること", "ingenuty_02": "改修しやすいよう、無駄なコードを書かないこと", "times": "14" },
    { "img_pc": "./img/img_005.jpg", "img_sp": "./img/img_006.png", "ttl": "Web", "link": "http://kskaidu1011.xsrv.jp/demo/works_002/", "skill": "HTML / CSS/ Javascript", "ingenuty_01": "繰り返しの処理を効率良く記述すること", "ingenuty_02": "改修しやすいよう、無駄なコードを書かないこと", "times": "18" }
  ]
  for (let i = 0; i < items.length; i++) {
    $cont_works.innerHTML += `
      <section>
        <a href="${items[i].link}" target="_blank" rel="noopener noreferrer" class="works_img">
          <figure class="fadeIn_img"><img src="${items[i].img_pc}" alt=""></figure>
          <figure class="fadeIn_img"><img src="${items[i].img_sp}" alt=""></figure>
        </a>
        <div class="works_txt">
          <div class="ttl">
            <h1>${items[i].ttl}</h1>
            <a href="${items[i].link}" target="_blank" rel="noopener noreferrer">${items[i].link}</a>
            <a href="${items[i].link}" target="_blank" rel="noopener noreferrer">View the site</a>
          </div>
          <div class="skill">
            <h2>使用したスキル</h2>
            <p>${items[i].skill}</p>
          </div>
          <div class="ingenuity">
            <h2>工夫した点</h2>
            <p>${items[i].ingenuty_01}</p>
            <p>${items[i].ingenuty_02}</p>
          </div>
          <div class="time_required">
            <h2>所用時間</h2>
            <p>${items[i].times}時間</p>
          </div>
        </div>
      </section>
    `
  }
}
cont_works()

/*----------------------
hoverアニメーション
----------------------*/
// cont_worksのaタグをhoverしたら
function works_hover() {
  const $works_a = document.querySelectorAll('#cont_works section .works_txt .ttl a')
  for (let i = 0; i < $works_a.length; i++) {
    $works_a[i].addEventListener('mouseover' , () => {
      const $works_img =document.querySelectorAll('#cont_works section .works_img')
      $works_img[i].classList.add('on')
    })
    $works_a[i].addEventListener('mouseout' , () => {
      const $works_img =document.querySelectorAll('#cont_works section .works_img')
      $works_img[i].classList.remove('on')
    })
  }
}
works_hover()

/*----------------------
スクロールアニメーション01
----------------------*/
/* 
第１引数：classの指定（ドットを必ず付けること）
第２引数：発火してから付与されるclassの指定
第３引数：発火タイミング（下から何ピクセルか？）
*/
const Scroll_Anime = ($class = '.fadeIn', $on_class = 'true', $px = "600") => {
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
Scroll_Anime('.fadeIn_img', 'true', '650')