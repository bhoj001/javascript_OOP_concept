/*
This exercise is about stop watch 
we can start stop and see the duration of a stop watch 
unit used is in seconds
*/

function Stopwatch(){
    let starttime = 0, stoptime = 0, running = false;

    this.start = function(){
        if (running == false){
            starttime = new Date().getTime();
            // reset
            running  = true;
        }else{
            throw new Error('Timer already started')
        }
        
    }
    this.stop = function(){
        if (running == true){
            stoptime = new Date().getTime();
            // reset timer status
            running = false
        }else{
            throw new Error('Timer already stopped')
        }
    }
    Object.defineProperty(this,'duration',{
        get: function(){
            return (stoptime - starttime)/1000 +" seconds"
        }
    })

    this.reset =  function(){
        starttime = 0;
        stoptime = 0;
        running = false;
    }
}