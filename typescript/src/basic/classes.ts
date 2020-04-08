

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(this.name, this.age);
    }
}

class Students extends Person {
    school: string;
    constructor(school: string){
        super('小王', 200);
        this.school = school;
    }
    tell(){
        console.log(this.name + this.age + this.school);
    }
}

var wang = new Students('哈哈高中');
wang.tell();
wang.print();


class Flower{
    name: string; // private name 私有，不能被外部访问。
    age: number;
    print(){
        console.log('一朵小发发' + this.name + this.age);
    }
}

class Mudan extends Flower{
    mean: string;
    print(){
        console.log(this.mean + this.name + this.age);
    }
}

var mumumu = new Flower();
mumumu.print();


class Hello{
    private _word: string;
    static huohuo: string;
    get words(): string{ // 取值
        return this._word;
    }

    set words(words: string){ // 赋值
        this._word = words;
    }

    sayStatic(){
        console.log(Hello.huohuo);
    }

    tell(){
        console.log(this._word);
    }
}

var sayHi = new Hello();
sayHi.words = '嚯嚯嚯';
sayHi.tell();


class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }

    greet(){
        return 'helelelel' + this.greeting;
    }
}

var greenType:Greeter = new Greeter('iiiwen');









































