(function(){

    var s = Snap('100%', 700);

    var style = {
        fill: '#FF6F69',
        stroke: '#FFEEAD',
        strokeWidth: 10
    };
    

    var circle = s.circle(100, 100, 50).attr(style);
    var rect = s.rect(200, 50, 100, 100).attr(style);
    var ellipse = s.ellipse(400, 100, 70, 40).attr(style);

    var line = s.line(500, 50, 600, 150).attr({stroke: '#FF6F69', strokeWidth: 5});
    var polyline = s.polyline(700, 100, 650, 200, 700, 300).attr({stroke: '#FF6F69', strokeWidth: 5, fill: 'transparent'});



    var path = s.path("M100 200L200 250").attr({stroke: '#FF6F69', strokeWidth: 5});
    // M	moveto	(x y)+
    // Z	closepath	(none)
    // L	lineto	(x y)+
    // H	horizontal lineto	x+
    // V	vertical lineto	y+
    // C	curveto	(x1 y1 x2 y2 x y)+
    // S	smooth curveto	(x2 y2 x y)+
    // Q	quadratic Bézier curveto	(x1 y1 x y)+
    // T	smooth quadratic Bézier curveto	(x y)+
    // A	elliptical arc	(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+


    // Linear gradient
    var linearGradient = s.gradient('l(0, 0, 1, 1)#000-#f00-#fff');
    var rect2 = s.rect(750, 100, 100, 100).attr({stroke: '#FF6F69', strokeWidth: 5, fill: linearGradient});

    // Radial gradient
    var radialGradient = s.gradient('r(0.5, 0.5, 0.5)#0f0-#fff');
    var circle2 = s.circle(1000, 100, 50).attr({stroke: '#FF6F69', strokeWidth: 5, fill: radialGradient}).drag();


    // Animation
    circle2.animate({r: 70}, 1000, mina.easein, function(){
        this.animate({r: 20}, 1000, mina.easein)
    });
    
    // Transformations
    rect.transform('r45, 250, 100');


    // Chaining events
    var ball = s.circle(200, 500, 40)
        .attr(style)
        .mouseover(function(){
            return this.animate({
                cx: 500
            }, 800, mina.elastic);
        })
        .click(function(){
            return this.animate({
                cx: 200
            }, 800, mina.elastic)
        });

    // One more example
    ellipse.mouseover(function(){
        return this.animate({
            rx: 50
        }, 500, mina.easein);
    });

    

})();