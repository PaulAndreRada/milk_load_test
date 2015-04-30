/*
 * Milk loaded v1
 *
 * Use the at sign to referance locations during searches
 * example : @top || @index
 *
 * procSketch 
 *
 *  object || obj
 * 
 *
 */// pass the $ object into the scope
(function(){var e=function(e){var t=e,n=495,r=300;shine=t.loadImage("glass_shine.png");var i=function(e){var e=e||{},i={x:0,y:0,xoff:0,yoff:0,waterLine:e.waterLine||r/2,amplitude:e.amplitude||20,flow:e.flow||.009,resolution:e.resolution||10,color:e.color||t.color(74,197,247)};i.init=function(){i.set().draw()};i.set=function(){i.xoff=0;return i};i.draw=function(){t.noStroke();t.fill(i.color);t.beginShape();for(var e=0;e<=n;e+=i.resolution){i.updateY();t.vertex(e,i.y);i.updateX()}i.yoff+=i.flow;t.vertex(n*2,r*2);t.vertex(0,r*2);t.endShape("CLOSE");return i};i.updateX=function(){i.xoff+=.05;return i};i.updateY=function(){var e=i.waterLine-i.amplitude/2,n=i.waterLine+i.amplitude;i.y=t.map(t.noise(i.xoff,i.yoff),0,1,e,n);return i};i.updateWaterLine=function(e){var e=e||{};e.location&&(i.waterLine=e.location);e.additive&&(i.waterLine+=e.additive);return i};return i},s=i({amplitude:30,resolution:4,flow:.02,waterLine:r-20,color:t.color(74,200,250)}),o=i({amplitude:10,resolution:4,flow:.03,waterLine:r-20,color:t.color(74,200,255)}),u=i({amplitude:50,flow:.009,resolution:14,waterLine:r-20,color:t.color(74,190,245)}),a=0;t.setup=function(){t.size(n,r);t.frameRate(30)};t.draw=function(){t.background(255);o.init();s.init();u.init();t.image(shine,0,0,n,r);t.mouseClicked=function(){a=-0.5};if(t.millis()%3===0){s.updateWaterLine({additive:a});o.updateWaterLine({additive:a});u.updateWaterLine({additive:a})}if(t.millis()%8===0){s.updateWaterLine({additive:a});o.updateWaterLine({additive:a});u.updateWaterLine({additive:a})}if(t.millis()%2===0){s.updateWaterLine({additive:a});o.updateWaterLine({additive:a});u.updateWaterLine({additive:a})}if(t.millis()%6===0){s.updateWaterLine({additive:a});o.updateWaterLine({additive:a});u.updateWaterLine({additive:a})}}},t=document.getElementById("canvas"),n=new Processing(t,e)})();