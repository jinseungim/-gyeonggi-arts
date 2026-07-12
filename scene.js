// 학교 풍경 배경을 모든 페이지에 삽입 (공통)
// <body data-scene="classroom"> 이면 교실(학교 안) 배경을 넣는다
(function () {
  var scene = document.createElement('div');
  scene.className = 'scene';
  scene.setAttribute('aria-hidden', 'true');

  if (document.body.dataset.scene === 'classroom') {
    // data-chalk가 지정되면 그 문구를(빈 값이면 빈 칠판), 없으면 기본 문구를 쓴다
    var chalkText = ('chalk' in document.body.dataset)
      ? document.body.dataset.chalk
      : '경기예고';
    scene.classList.add('scene--room');
    scene.innerHTML =
      '<div class="room-wall"></div>' +
      '<div class="room-window rw-left"></div>' +
      '<div class="room-window rw-right"></div>' +
      '<div class="room-clock"></div>' +
      '<div class="blackboard"><div class="chalk"></div></div>' +
      '<div class="room-floor"></div>' +
      '<div class="easel easel-left"><div class="canvas"></div></div>' +
      '<div class="easel easel-right"><div class="canvas"></div></div>';
    var chalk = scene.querySelector('.chalk');
    if (chalkText) {
      chalk.textContent = chalkText;
    } else {
      chalk.remove(); // 빈 칠판 (밑줄도 없이)
    }
    document.body.insertBefore(scene, document.body.firstChild);
    return; // 실내에는 꽃잎 없음
  }

  // 단풍나무 SVG (가지 + 겹겹의 단풍잎)
  var mapleSVG =
    '<svg class="tree-svg" viewBox="0 0 150 185" xmlns="http://www.w3.org/2000/svg">' +
      // 줄기 + 밑동
      '<path d="M64 185 L67 118 Q75 110 83 118 L86 185 Z" fill="#6f4a2b"/>' +
      '<path d="M67 118 L71 118 L74 185 L70 185 Z" fill="#5b3a20" opacity="0.5"/>' +
      // 가지
      '<g fill="none" stroke="#684328" stroke-linecap="round">' +
        '<path d="M75 128 C 62 114 50 108 40 96" stroke-width="8"/>' +
        '<path d="M75 124 C 90 110 104 104 114 92" stroke-width="8"/>' +
        '<path d="M75 116 C 73 100 73 92 76 82" stroke-width="7"/>' +
        '<path d="M55 112 C 48 104 44 100 42 92" stroke-width="4"/>' +
        '<path d="M100 106 C 106 100 108 96 112 90" stroke-width="4"/>' +
      '</g>' +
      // 단풍잎 뭉치 (뒤 어두운 층 → 앞 밝은 층) — 푸른 하늘과 어울리는 진홍·버건디 톤
      '<g>' +
        '<circle cx="75" cy="60" r="43" fill="#7e2a20"/>' +
        '<circle cx="46" cy="64" r="26" fill="#732519"/>' +
        '<circle cx="104" cy="62" r="26" fill="#732519"/>' +
        '<circle cx="75" cy="72" r="32" fill="#93301d"/>' +
        '<circle cx="60" cy="46" r="25" fill="#a53a20"/>' +
        '<circle cx="92" cy="48" r="24" fill="#a53a20"/>' +
        '<circle cx="42" cy="54" r="19" fill="#9c3620"/>' +
        '<circle cx="108" cy="54" r="19" fill="#9c3620"/>' +
        '<circle cx="100" cy="68" r="15" fill="#6e2420"/>' +
        '<circle cx="50" cy="74" r="14" fill="#6e2420"/>' +
        '<circle cx="66" cy="34" r="20" fill="#bf5228"/>' +
        '<circle cx="92" cy="38" r="17" fill="#b34824"/>' +
        '<circle cx="52" cy="40" r="16" fill="#b84e2a"/>' +
        '<circle cx="60" cy="32" r="12" fill="#cf6e34"/>' +
        '<circle cx="78" cy="30" r="11" fill="#d67a3a"/>' +
        '<circle cx="75" cy="52" r="9"  fill="#c26234" opacity="0.6"/>' +
      '</g>' +
    '</svg>';

  scene.innerHTML =
    '<div class="sky"></div>' +
    '<div class="sun"></div>' +
    '<div class="cloud cloud1"></div>' +
    '<div class="cloud cloud2"></div>' +
    '<div class="cloud cloud3"></div>' +
    '<div class="hills"></div>' +
    '<div class="ground"></div>' +
    '<div class="tree tree-left">' + mapleSVG + '</div>' +
    '<div class="tree tree-right">' + mapleSVG + '</div>' +
    '<div class="building">' +
      '<div class="tower"><div class="clock"></div></div>' +
      '<div class="roof"></div>' +
      '<div class="wall">' +
        '<div class="win-row">' +
          '<span class="win"></span><span class="win"></span><span class="win"></span><span class="win"></span>' +
        '</div>' +
        '<div class="door"></div>' +
      '</div>' +
    '</div>';
  document.body.insertBefore(scene, document.body.firstChild);

  // 떨어지는 단풍잎 — 나무·하늘 톤에 맞춘 진홍·버건디 계열
  var leafColors = ['#8a2b20', '#a53a20', '#9c3620', '#b84e2a', '#c26234', '#6e2420'];
  for (var i = 0; i < 12; i++) {
    var p = document.createElement('div');
    p.className = 'scene-petal';
    p.style.left = (Math.random() * 100) + 'vw';
    p.style.background = leafColors[(Math.random() * leafColors.length) | 0];
    p.style.animationDuration = (7 + Math.random() * 8) + 's';
    p.style.animationDelay = (-Math.random() * 12) + 's';
    p.style.transform = 'scale(' + (0.6 + Math.random() * 0.8) + ')';
    document.body.appendChild(p);
  }
})();
