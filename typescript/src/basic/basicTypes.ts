



var isBoon: boolean = true;
var myNum: number = 12;
var myName: string = '这个是字符串';
var scores: Array<number> = [1, 2, 3, 4]; // 或者使用 number[]也可以
var youCalls: string[] = ['fek', 'fejlk', '123jkx', 'fx'];
enum Color { Red = 'red', Green = 'green', Blue = 'blue' }; // 枚举
var mycolor: Color = Color.Red; // 得到Red的下标。 
var param: any = 'unknown types'; // 任意数据类型

function tellBase(){
    console.log('baseTypes', isBoon, myNum, myName);
}

function tellMore(){
    console.log('array show', scores, youCalls);
    console.log('enum', mycolor);
    console.log('any types', param);
}

function tellFunc(): void{
    console.log('void 对应的函数');
    // return 'this is func return';
}

tellBase();
tellMore();
tellFunc();

