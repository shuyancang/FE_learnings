

// function add(x, y){ // js中的普通函数
//     return x + y
// }

function add(x:number, y: number): number{
    return x + y;
}


// var myFunc = function(x, y) { // js中的匿名函数
//     return x * y;
// }

var myFunc = function(x: number, y: number): string{
    return (x * y).toString();
}

// var myFuncAgain:(name: string, age: number) => number = function(n:string, a:number):string{
//     return '姓名' + n + '是' + a + '岁';
// }

var nameFunc = function(x: string, y?:string): string{
    return x + y;
}

var defaultFunc = function(x: string, y='iiiiv'): string{
    return x + y;
}

var changeParamFunc = function(fir:string, ...rest:string[]): string{ // rest可变参数
    return fir + rest.join('');
}

console.log(add(1, 3));
console.log(myFunc(2, 3));
console.log(nameFunc('张三', '李四'), nameFunc('和黑'), defaultFunc('默认'));
// console.log(myFuncAgain('张三', 28));




var people = {
    name: ['i', 'ek', 'sef'],
    getName: function(){
        return () => {
            var i = Math.floor(Math.random() * 3);
            return {
                n: this.name[i],
            }
        }
    }
}

var myname = people.getName();

console.log(myname);

function attr(name: string): string;
function attr(age: number): number;

function attr(nameOrAge: any): any{
    console.log(nameOrAge);    
};

console.log(attr('年龄'));






























