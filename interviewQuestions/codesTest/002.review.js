
class RangeList{
  constructor(initRange){
    this.records = this.isValidateRange(initRange) ? [initRange] : [];
  }
  isValidateRange(range){
    if(range instanceof Array){
      const [start, end] = range;
      return start < end;
    }
    return false;
  }
  add(range){
    if(!this.isValidateRange(range)){
      return;
    }
    let i = 0;
    const len = this.records.length;
    let [start, end] = range;
    const res = [];
    while(i < len && this.records[i][1] < start){ // 无交叉
      res.push(this.records[i]);
      i++;
    }
    while(i < len && this.records[i][0] <= end) { // 交叉区域
      start = Math.min(start, this.records[i][0]);
      end = Math.max(end, this.records[i][1]);
      i++;
    }
    res.push([start, end]);
    while(i < len){
      res.push(this.records[i]);
      i++;
    }
    this.records = res;
    return this;
  }
  remove(range){
    if(!this.isValidateRange(range)){
      return;
    }
    const len = this.records.length;
    let [start, end] = range;
    let i = 0;
    const res = [];
    while(i < len && this.records[i][1] <= start){
      res.push(this.records[i]);
      i++;
    }
    if(i < len && this.records[i][0] < start){
      res.push([this.records[i][0], start]);
    }
    while(i < len && this.records[i][1] <= end){
      i++;
    }
    if(i < len){
      res.push([end, this.records[i][1]]);
      i++;
    }
    while(i < len){
      res.push(this.records[i]);
      i++;
    }
    this.records = res;
    return this;
  }
  print(){
    console.log(this.records.join(')---['))
  }
}

// const rl = new RangeList();
// rl.add([1, 5]).add([10, 20]).add([20, 21]).add([2, 4]).add([3, 8]).remove([10, 11])