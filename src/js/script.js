$(window).on('load', function () {
    document.querySelector('.awake').classList.add('awake_end');
    setTimeout(function () {
        let animation_container = document.querySelector('header').querySelectorAll('.anim_side_left');
        for (let i = 0; i < animation_container.length; i++) {
            setTimeout(function () {
                animation_container[i].classList.add('anim_play');
            }, animation_container[i].dataset.animDelay);
        }
    }, 700);
});

document.addEventListener('DOMContentLoaded', function () {
    const anim_elements = document.querySelectorAll('.scroll_anim');
    var sm_controllers = {};
    var sm_scenes = {};
    for (let i = 0; i < anim_elements.length; i++) {
        sm_controllers[i] = new ScrollMagic.Controller();
        sm_scenes[i] = new ScrollMagic.Scene({
            triggerElement: anim_elements[i],
            duration: 0,
            triggerHook: 0.8,
            reverse: false
        })
            .setClassToggle(anim_elements[i], 'show')
            .addTo(sm_controllers[i]);
    }
});

function arrayShuffle(array) {
    for (var i = (array.length - 1); 0 < i; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array;
}

function convert_hdpi(file_name) {
    const pixel_ratio = window.devicePixelRatio;
    if (pixel_ratio >= 1.5) {
        file_name = file_name.replace('.jpg', '@1.5x.jpg');
    } else if (pixel_ratio >= 2) {
        file_name = file_name.replace('.jpg', '@2x.jpg');
    }
    return file_name;
}

let persons = [
    ['Hiramatsu_Reina', '平松 レイナ', '元スパイ', '実は犬の妖精。たまに噛み付く。', 'reina.jpg'],
    ['Kawaguchi_Moka', '川口 萌花', 'JD卍', '目が合うとやばい何かにされてしまう。', 'moka.jpg'],
    ['Kikawada_Yuta', '黄川田 佑太', '小麦アレルギー', 'よく食べ、よく寝る。', 'yuta.jpg'],
    ['Kuwayama_Russell', 'ラッセル桑山', 'サイコパス', '人の皮を被っているが実際は...。実際に姿を見たことがある人は今となっては誰も居ないという。', 'russell.jpg'],
    ['Omizo_Kazuki', '大溝一生', 'Beyond human knowledge...', '何をしても誰も驚かない神出鬼没の妖精さん。', 'mizo.jpg'],
    ['Tachibana_Toshiki', '橘敏輝', '紅蓮花', 'マネーイズパワー代表取締役', 'toshiki.jpg'],
];

persons = arrayShuffle(persons);

let i = 0;
for (const element of persons) {
    let name = element[1];
    let job = element[2];
    let description = element[3];
    let img = convert_hdpi(element[4]);
    let html = `
<div class="person scroll_anim position-relative my-5">
    <a href="#" class="btn btn-link text-white" data-featherlight="#person-${i}-window">
        <div class="link_box position-absolute">
            <div class="link_box_inner position-absolute">
                <h2 class="mb-3">${name}</h2>
                <p class="position-relative">${job}</p>
            </div>
        </div>
        <div class="link_box_background position-absolute" style="background-image: url(src/img/profile/${img})"></div>
    </a>
    <div id="person-${i}-window" class="window text-light">
        <img class="mb-3" src="src/img/profile/${img}" alt="${name}画像">
        <h3 class="mb-1">${name}</h3>
        <p class="mb-1">${job}</p>
        <p class="mb-1">${description}</p>
    </div>
</div>
    `;
    document.querySelector('#member').innerHTML += html;
    i++;
}