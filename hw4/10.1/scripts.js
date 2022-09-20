// Калькулятор 

let Calc = function() {
    this.onOff = function() {
        this.on = confirm('Включить калькулятор?');
        if (this.on == true) {
            this.get();
        }else {
            alert('Калькулятор выключен');
        }
    }
    this.get = function() {
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /');
        this.operation();
    } 
    this.operation = function() {
        switch (this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }
        this.show();
    }
    this.show = function() {
            console.log(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
        }
}  
// Наследование
let Calc2 = function() {
    Calc.apply(this);
    let parentShow = this.show;
    this.show = function() {
        parentShow.call(this);
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    }
}

let calc2 = new Calc2();
calc2.onOff();