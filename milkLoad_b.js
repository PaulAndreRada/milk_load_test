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
 */

// pass the $ object into the scope
(function(){
    
    // Main processing function
    var procSketch = function( processing ) {
	//
	// Save the processing object
	var p = processing,
	width = 330*1.5,
	height = 200*1.5;
	//
	shine = p.loadImage("glass_shine.png");

	// @wave
	var Wave = function( o ){ 
	    //
	    var o = o || {};
	    //
	    // create the wave object and its settings
	    var wave = { 
		x : 0,
		y : 0,
		xoff : 0,
		yoff : 0,
		waterLine : o.waterLine || height/2,
		amplitude : o.amplitude || 20,
		flow : o.flow || 0.009,
		resolution : o.resolution || 10,
		color: o.color || p.color( 74, 197, 247 )
	    };
	

	    wave.init = function(){ 
		//
		wave
		//
		// set the the xoffset
		.set()
		//
		// draw the wave
		.draw();
		//
	    };


	    wave.set = function(){ 
		//
		wave.xoff = 0;       
		//
		return wave;
	    };

	    
	    wave.draw = function(){ 
		//
		// color the wave
		p.noStroke();
		p.fill( wave.color );
		//
		// start the vector shape for the wave
		p.beginShape(); 
		//
		// Iterate over horizontal pixels
		for (var x = 0; x <= width; x += wave.resolution) {
		    //
		    wave.updateY();
		    //		    
		    // Set the vertex
		    p.vertex(x, wave.y); 
		    //
		    // Increment x dimension for noise
		    wave.updateX();
		}
		// increment y dimension for noise
		// water flow speed
		wave.yoff += wave.flow;
		//
		// draw right edge vector
		p.vertex( width*2, height*2 );
		//
		// draw left edge vector
		p.vertex( 0, height*2 );
		//
		p.endShape("CLOSE");
		//
		return wave;
	    };

	    
	    wave.updateX = function(){ 
		//
		wave.xoff += 0.05;
		//
		return wave;
	    }; 
	    

	    wave.updateY = function(){ 
		//
		var rangeStart = wave.waterLine - wave.amplitude/2, 
		rangeEnd = wave.waterLine + wave.amplitude;
		//
		// use perlin noise to update the Y cordinate 
		// of the wave then map it to the center of the screen
		wave.y = p.map(p.noise(wave.xoff, wave.yoff), 0, 1, rangeStart, rangeEnd );
		//
		return wave;
	    };

	    
	    wave.updateWaterLine = function( o ){ 
		//
		var o = o || {};
		//
		if( o.location ){ 
		    wave.waterLine = o.location ;
		};
		//
		if( o.additive ){ 
		    wave.waterLine += o.additive;
		};
		//
		return wave;
	    };
	    
	    return wave;
	};
	//
	// Save and Set the wave object's parameters
	var waveA = Wave({
		amplitude : 30,
		resolution : 4,
		flow : 0.02,
		waterLine : height - 20,
		color: p.color( 74, 200, 250 )
	    }),
	waveB = Wave({ 
		amplitude : 10,
		resolution : 4,
		flow : 0.03,
		waterLine : height - 20,
		color: p.color( 74, 200, 255 )	       
	    }),
	waveC = Wave({ 
		amplitude : 50,
		flow: 0.009,
		resolution : 14,
		waterLine : height - 20,
		color: p.color( 74, 190, 245 )
	    });
	
	// rises with negative numbers
	var risingSpeed = 0;
	//
	// set up the canvas using processing
	p.setup = function() {
	    p.size(width, height);
	    p.frameRate(30);
	};
	//
	// draw inside the canvas 
	p.draw = function() {
	    //
	    // refresh the background
	    p.background(255);
	    //
	    // draw the wave by initialising the wave object
	    waveB.init();
	    waveA.init();
	    waveC.init();
   	    //
	    // overlay the shine
	    p.image( shine, 0, 0, width, height );
	    //
	    p.mouseClicked = function(){ 
		//
		risingSpeed = -0.4;
		//
	    };
	    //
	    // increase the waterlevel 
	    if( p.millis() % 3 === 0 ){ 
		
		waveA.updateWaterLine({ additive : risingSpeed });
		
		waveB.updateWaterLine({ additive : risingSpeed });
		
		waveC.updateWaterLine({ additive : risingSpeed });
	    }
	    
	    // increase the waterlevel in stages
	    if( p.millis() % 1 === 0 ){ 
		
		waveA.updateWaterLine({ additive : risingSpeed });
		
		waveB.updateWaterLine({ additive : risingSpeed });
		
		waveC.updateWaterLine({ additive : risingSpeed });
	    }
	    
	    // increase the waterlevel in stages
	    if( p.millis() % 2 === 0 ){ 
		
		waveA.updateWaterLine({ additive : risingSpeed });
		
		waveB.updateWaterLine({ additive : risingSpeed });
		
		waveC.updateWaterLine({ additive : risingSpeed });
	    }

	    
	    // increase the waterlevel in stages
	    if( p.millis() % 6 === 0 ){ 
		
		waveA.updateWaterLine({ additive : risingSpeed });
		
		waveB.updateWaterLine({ additive : risingSpeed });
		
		waveC.updateWaterLine({ additive : risingSpeed });
	    }


	}// draw
    }//procSketch


    // @init
    // 
    // grab the canvas element
    var canvas = document.getElementById("canvas");
    //
    // attach the sketchProc function to the canvas
    var p = new Processing( canvas, procSketch );
    //
    // p.exit(); to detach it
    //
})();
