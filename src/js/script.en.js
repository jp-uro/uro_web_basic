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
    ["Hiramatsu_Reina", "Reina Hiramatsu", "Niya-Niya Smirk-in-charge", "Born in Aichi Prefecture in 1997. She became addicted to games when she was in fifth grade and felt a sense of disappearing, so she appeared in NHK dramas for three years from sixth grade. She became interested in the behind-the-scenes of drama production and wanted to be on the side that creates. In high school, she was involved in live event management and MC, and video production, and after graduating from high school, she lived a wandering life for a year. After wandering, she entered Digital Hollywood University and created media art with the theme of discomfort. Her hobbies are ruins and haunted houses.", "reina.jpg"],
    ["Kawaguchi_Moka", "Moka Kawaguchi", "Ton-Ton Tap-tap-in-charge", "Born in Tokyo in 1999. Currently a M2 student at Digital Hollywood Graduate School and a member of the creative company “PARTY”. She has been making videos since high school and produces works using hand-drawn animation and 3DCG. Currently, she mainly creates interactive works such as installations and media art. She won the Excellence Award at the 2018 Tokyo International Projection Mapping Award Vol.3, the Digital Frontier Grand Prix and the Best Art Award in 2021, etc.", "moka.jpg"],
    ["Kikawada_Yuta", "Yuta Kikawada", "Kata-Kata Clack-clack-in-charge", "Leveraging his experience in mobile app development and PM, he is currently launching a startup with the theme of “I want to make this happen”. He is engaged in IoT-related businesses. As a software engineer, he also developed cross-platform apps that can be used on smartphones and PCs anytime, anywhere, by anyone, and is still active as a developer. He is currently researching image recognition and natural language processing using machine learning, as well as virtualization and cloud infrastructure at the infrastructure level.", "yuta.jpg"], 
    ["Kuwayama_Russell", "Russell Kuwayama", "Nuri-Nuri Paint-paint-in-charge", "Born in 1998. A wandering illustrator.", "russell.jpg"],
    ["Omizo_Kazuki", "Kazuki Omizo", "Biri-Biri Zap-zap-in-charge", "Born in Chiba Prefecture in 1998. After working as an operation engineer for a streaming service, he is now in charge of technology-side production at otuA Co., Ltd. He is involved in the overall creative and operation, covering both hardware and software aspects, including design.", "mizo.jpg"],
    ["Tachibana_Toshiki", "Toshiki Tachibana", "Gui-Gui Push-push-in-charge", "Born in Tokyo in 1998. He started performing in musicals at the age of 3, and has been active since his childhood, such as playing Rantaro in the musical “Nintama Rantaro Part 1” and dubbing Harry Potter and the Deathly Hallows Part 2. In high school, he studied comprehensive arts under the actors of Bungakuza and the New National Theatre, and then pursued video expression based on physical expression at Digital Hollywood University. He is currently producing content in the field of art x business at hackjpn. He is involved in the production and operation of YouTube videos for many celebrities, and handles tasks such as direction, shooting, editing, and live streaming.", "toshiki.jpg"]
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
        <div class="link_box_background position-absolute" style="background-image: url(../src/img/profile/${img})"></div>
    </a>
    <div id="person-${i}-window" class="window text-light">
        <img class="mb-3" src="../src/img/profile/${img}" alt="${name} Picture">
        <h3 class="mb-1">${name}</h3>
        <p class="mb-1">${job}</p>
        <p class="mb-1">${description}</p>
    </div>
</div>
    `;
    document.querySelector('#member').innerHTML += html;
    i++;
}
