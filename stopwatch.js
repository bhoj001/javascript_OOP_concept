function Stopwatch(){
    let starttime = 0;
    let stoptime = 0;
    let timer_start_status = false;
    let timer_stop_status = false;
    this.start = function(){
        if (timer_start_status == false){
            starttime = new Date().getTime();
            // reset
            timer_start_status = true;
            timer_stop_status = false;
        }else{
            throw new Error('Timer already started')
        }
        
    }
    this.stop = function(){
        if (timer_stop_status == false ){
            stoptime = new Date().getTime();

            // reset timer status
            timer_start_status = false;
            timer_stop_status = true;
        }else{
            throw new Error('Timer already stopped')
        }
    }
    Object.defineProperty(this,'defaultDuration',{
        get: function(){
            if (timer_start_status == false && timer_stop_status == true){
                return (stoptime - starttime)/3600 +"seconds"
            }else{
                return "Start and stop the timer first!"
            }
           
        }
    })

    this.reset =  function(){
        starttime = 0;
        stoptime = 0;
        timer_start_status = false;
        timer_stop_status = false;
    }
}