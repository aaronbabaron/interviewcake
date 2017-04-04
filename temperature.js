class TempTracker {
  constructor() {
    this.temps = {};
    this.max = null;
    this.min = null;
    this.sum = null;
    this.mode = null;
    this.itemCount = 0;
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMode() {
    return this.mode;
  }

  getMean() {
    return this.sum / this.itemCount;
  }

  insert(val) {
    if (this.temps[val]) {
      ++this.temps[val];
    } else {
      this.temps[val] = 1;
    }

    if (this.max === null) {
      this.max = val;
      this.min = val;
      this.sum = val;
      this.mode = val;
    } else {
      if (this.max < val) this.max = val;
      if (this.min > val) this.min = val;
      if (this.temps[this.mode] < this.temps[val]) this.mode = val;
      this.sum += val;
    }

    ++this.itemCount;
  }
}


var track = new TempTracker();

track.insert(3);
track.insert(3);
track.insert(3);
console.log(track.getMode());
console.log(track.getMean());
track.insert(4);
console.log(track.getMax());
console.log(track.getMin());
track.insert(4);
track.insert(4);
console.log(track.getMode());
track.insert(4);
console.log(track.getMode());
track.insert(1);
console.log(track.getMin());
track.insert(2);
console.log(track.getMean());
