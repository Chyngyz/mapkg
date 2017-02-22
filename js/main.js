(function() {

    $(document).ready(function() {

        Snap.load('images/map.svg', function(map){

            Snap('#map').append(map);

            var lands = $('[id*=land]'),
                regions = $('[id^=region]'),
                chui = $('#chui'),
                talas = $('#talas'),
                yssykKol = $('#yssyk-kol'),
                naryn = $('#naryn'),
                jalalAbad = $('#jalal-abad'),
                osh = $('#osh'),
                batken = $('#batken'),
                farms = $('[id^=farm]'),
                trees = $('[id^=tree]'),
                houses = $('[id^=house]'),
                mountains = $('[id^=mountain]'),
                boats = $('[id^=boat]'),
                sheeps = $('[id^=sheep]'),
                lake = $('#lake'),
                sulaimantoo = $('#sulaimantoo'),
                whiteHouse = $('#white_house'),
                replay = $('#replay');


            var tl = new TimelineMax({onComplete: onCompleteAction});
            tl
                .staggerFromTo(lands, 1.2,
                    {scale: '0', transformOrigin: '50% 60%'},
                    {scale: '1', ease: Elastic.easeOut.config(1, 1)},
                    '0.05', '-=0.2')
                .fromTo(lake, 0.5,
                    { y: '-10', opacity: 0},
                    { y: '0', opacity: 1},
                    '-=0.4')
                .staggerFromTo(mountains, 0.5, 
                    {scale: '0', scaleX: '0.85', transformOrigin: '50% 80%'},
                    {scale: '1', scaleX: '1'},
                    '0.07','-=0.4')
                .staggerFromTo(boats, 0.3,
                    {y: '-5', opacity:0},
                    {y: '0', opacity:1, ease: Bounce.easeOut},
                    '-=1.2')
                .staggerFromTo(houses, 0.5, 
                    {scale: '0', scaleX: '0.85', transformOrigin: '50% 80%'},
                    {scale: '1', scaleX: '1'},
                    '0.04','-=0.4')
                .staggerFromTo(farms, 0.5, 
                    {scale: '0', scaleX: '0.85', transformOrigin: '50% 80%'},
                    {scale: '1', scaleX: '1'},
                    '0.04','-=0.4')
                .staggerFromTo(sheeps, 1,
                    {y: '-10', opacity:0, transformOrigin: '50% 80%'},
                    {y: '0', opacity:1, ease: Bounce.easeOut},
                    '0.03', '-=1')
                .staggerFromTo(trees, 0.3, 
                    { scale: '0', transformOrigin: '50% 80%' },
                    { scale: '1' },
                    '0.02', '-=1')
                .fromTo(sulaimantoo, 0.5, 
                    {scale: '0', scaleX: '0.85', transformOrigin: '50% 80%'},
                    {scale: '1', scaleX: '1'},
                    '-=0.5')
                .fromTo(whiteHouse, 0.5, 
                    {scale: '0', scaleX: '0.85', transformOrigin: '50% 80%'},
                    {scale: '1', scaleX: '1'},
                    '-=1', function() { console.log('done')});

            var boatsTl = new TimelineMax({repeat: -1, yoyo: true});
            boatsTl.add(TweenMax.to($(boats[0]), 4, { x: 15}));
            boatsTl.add(TweenMax.to($(boats[1]), 5, { x: -10}), '-=2');


            function onCompleteAction() {
                attachHover(regions);

                TweenMax.fromTo(replay, 0.2, 
                    {scale: '0', transformOrigin: '50% 60%'},
                    {scale: '1', opacity: 1, ease: Elastic.easeOut.config(1, 1)});
                
                $(replay)
                    .hover(function(){
                        TweenMax.to(replay, 0.2, { scale: '1.5', ease: Elastic.easeOut.config(1, 1)});
                    }, function() {
                        TweenMax.to(replay, 0.2, { scale: '1', ease: Elastic.easeIn.config(1, 1)});
                    })
                    .click(function(){
                        tl.restart();
                    });
            }

        });

    });


    function attachHover(regions) {
        regions.each(function(ind, region) {
            $(region).hover(function(){
                TweenMax.to($(region).siblings('g'), 0.2, {
                    opacity: 0.2
                });
                TweenMax.to($(region), 0.5, {
                    y: -15,
                    ease: Back.easeOut
                });
            }, function(){
                TweenMax.to($(region).siblings('g'), 0.2, {
                    opacity: 1
                });
                TweenMax.to($(region), 0.4, {
                    y: 0,
                    ease: Expo.easeIn
                });
            });
        });
    }

})();