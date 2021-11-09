class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval((callback) => this.currentTime += 1 , 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value > 10){
      return `${value}`
    }else {
      return `0${value}`
    }
  }

  stop() {
    return clearInterval(this.intervalId)
    // ... your code goes here
    
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
      return 
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
