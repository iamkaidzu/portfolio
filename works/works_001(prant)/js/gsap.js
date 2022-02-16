//FV
gsap.from("h1 a", {duration: 3, opacity: 0, scale: 2.5, ease: "back"});
gsap.from("nav ul li a", {duration: 2, opacity: 0, y: "random(-200, 200)", delay:"2", ease:"back", stagger: 0.25});
gsap.from(".main_v .in", {duration: 2, opacity: 0, delay:"2", y: 150, ease:"back"});
gsap.from(".main_v .in h1", {duration: 2, opacity: 0, y: "random(-150, 150)", delay:"3", ease:"back", stagger: 0.25});
gsap.from(".main_v .in p", {duration: 2, opacity: 0, y: "random(-150, 150)", delay:"3", ease:"back", stagger: 0.25});
gsap.from(".main_v .in .btn", {duration: 2, opacity: 0, y: "random(-150, 150)", delay:"3", ease:"back", stagger: 0.25});
gsap.from(".hum_btn .in div", {duration: 2, opacity: 0, y: 100, x: 100, rotation: 720, stagger: 0.25});

// cont_01
gsap.from(".cont_01 section", { //アニメーションしたい要素を指定
    y: 300, //縦に200px動かす
    opacity: 0,
    stagger: .8,
    duration: 2,
    deray:"2",
    scrollTrigger: {
      trigger: ".cont_01 section",//アニメーションが始まるトリガーとなる要素
      start: " center center " //アニメーションが始まる位置を指定
    }
  });