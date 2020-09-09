// let setTimer = setInterval(tick(timer.length), 1000)
//                         function tick (timerLength) {
//                             let minutes = timerLength
//                             let secondsRemaining = minutes * 60
//                             let min = Math.floor(secondsRemaining / 60) 
//                             let sec = secondsRemaining - (min * 60)
//                             if (sec < 10) {
//                                 sec = "0" + sec;
//                             }
                            
//                             let timer = min.toString() + ":" + sec;
                        
//                             console.log(timer)
                        
//                             if (secondsRemaining === 0){
//                                 console.log("done");
//                                 clearInterval(setTimer);
//                             }
//                             secondsRemaining--;