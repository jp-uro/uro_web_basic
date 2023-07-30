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
    ['Hiramatsu_Reina', '平松 レイナ', 'にやにや担当', '1997年愛知県生まれ。 小学5年生の時にゲームにハマり自分が消える感覚を覚え危機感から小学6年から3年間、NHK のドラマに出演。 ドラマ撮影の裏側を見て、仕掛ける側に興味を持つ。 高校時代はライブイベントの運営と司会、映像制作を行い高校卒業後は1年間放浪生活を送る。放浪した末にデジタルハリウッド大学に入学し、違和感をテーマにメディアアートを作成。 趣味は廃墟、事故物件。', 'reina.jpg'],
    ['Kawaguchi_Moka', '川口 萌花', 'とんとん担当', '1999年東京都生まれ。 2022年現在デジタルハリウッド大学院M2、クリエイティブ会社「PARTY」所属。 高校の頃から映像制作を行い手描きアニメーションと3DCGを駆使した作品を制作。 現在はインスタレーションやメディアアートを中心にインタラクティブな作品制作を行っている。 2018東京国際プロジェクションマッピングアワードVol.3優秀賞受賞、2021デジタルフロンティアグランプリ、ベストアート賞受賞など。', 'moka.jpg'],
    ['Kikawada_Yuta', '黄川田 佑太', 'かたかた担当', 'モバイルアプリの開発とPMの経験を活かし、現在は「こんなのあったら、を実現したい。」をテーマにスタートアップ立ち上げ。IoT関連の事業を行っている。ソフトウェアエンジニア時代はスマホでもPCでも、いつでも、誰でも、同じように使えるクロスプラットフォームアプリの開発も行っており、今でもデベロッパーとしても活動している。現在は機械学習を活用した画像認識・自然言語処理およびインフラレベルの仮想化・クラウドインフラの研究を行っている。', 'yuta.jpg'],
    ['Kuwayama_Russell', 'ラッセル桑山', 'ぬりぬり担当', '1998年生まれ。さすらいのイラストレーター。', 'russell.jpg'],
    ['Omizo_Kazuki', '大溝一生', 'びりびり担当', '1998年千葉県生まれ。ストリーミングサービスの運用エンジニアを経験後otuA株式会社にてテクノロジーサイドの制作を担当。ハードウェア・ソフトウェアの両面をカバーしながらデザインも含めた全体的なクリエイティブ・運用を行っている。', 'mizo.jpg'],
    ['Tachibana_Toshiki', '橘敏輝', 'ぐいぐい担当', ' 1998年東京都生まれ。3歳からミュージカルの舞台に立ち始め、ミュージカル『忍たま乱太郎第1段』乱太郎役、ハリー・ポッター死の秘宝Part2（吹き替え）など子役時代より活躍。高校時代、文学座・新国立劇場の俳優陣のもと、総合芸術について勉強し、その後デジタルハリウッド大学で身体表現を軸とした映像表現を追求。現在はhackjpnで、芸術×ビジネスの領域でコンテンツを輩出し続ける。 数々の著名人のYouTubeの制作・運営に携わり、ディレクション・撮影・編集・生配信といった業務をこなす。', 'toshiki.jpg'],
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
