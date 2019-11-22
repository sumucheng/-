console.log("------------没有原型------------");

let u1 = {
  name: "陈漂亮",
  age: 18,
  sayHi(msg) {
    console.log(msg + this.name);
  },
  sayAge() {
    console.log("我 " + this.age + " 岁了");
  }
};

let u2 = {
  name: "陈美丽",
  age: 22,
  sayHi(msg) {
    console.log(msg + this.name);
  },
  sayAge() {
    console.log("我 " + this.age + " 岁了");
  }
};

u1.sayHi("我是 ");
u1.sayAge();
u2.sayHi("我叫 ");
u2.sayAge();

console.log("-------抽出共同属性，简化--------");

let common = {
  sayHi(msg) {
    console.log(msg + this.name);
  },
  sayAge() {
    console.log("我 " + this.age + " 岁了");
  }
};

let u3 = {
  name: "陈可乐",
  age: 18,
  sayHi: common.sayHi,
  sayAge: common.sayAge
};
let u4 = {
  name: "陈雪碧",
  age: 22,
  sayHi: common.sayHi,
  sayAge: common.sayAge
};

u3.sayHi("我是 ");
u3.sayAge();
u4.sayHi("我叫 ");
u4.sayAge();

console.log("------------使用原型------------");

let prt = {
  sayHi(msg) {
    console.log(msg + this.name);
  },
  sayAge() {
    console.log("我 " + this.age + " 岁了");
  }
};

let u5 = {
  name: "陈七喜",
  age: 44
};
let u6 = {
  name: "陈芬达",
  age: 23
};

u5.__proto__ = prt;
u6.__proto__ = prt;

u5.sayHi("我是 ");
u5.sayAge();
u6.sayHi("我叫 ");
u6.sayAge();

console.log("-----------使用构造函数-----------");

function create(name, age) {
  return {
    name: name,
    age: age,
    sayHi(msg) {
      console.log(msg + this.name);
    },
    sayAge() {
      console.log("我 " + this.age + " 岁了");
    }
  };
}

let u7 = create("陈苹果", 29);
let u8 = create("陈雪梨", 22);

u7.sayHi("我是 ");
u7.sayAge();
u8.sayHi("我叫 ");
u8.sayAge();

console.log("-------------使用类-------------");

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi(msg) {
    console.log(msg + this.name);
  }
  sayAge() {
    console.log("我 " + this.age + " 岁了");
  }
}

let u9 = new user("陈汪汪", 29);
let u10 = new user("陈喵喵", 22);

u9.sayHi("我是 ");
u9.sayAge();
u10.sayHi("我叫 ");
u10.sayAge();

console.log("--------类的getter与setter--------");

class gs {
  constructor() {
    this._name = "陈翠花";
    this._age = 45;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get age() {
    return this._age;
  }
}

let cch = new gs();
console.log("set之前get: " + cch.name);
cch.name = "selina";
console.log("set之后get: " + cch.name);
cch.age = 18;
console.log("age为只读属性: " + cch.age);

console.log("-------------类的继承-------------");

class vip extends user {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
  discount(price) {
    console.log("原价" + price + ", 折后" + price * 0.8);
  }
}

let u11 = new vip("唯爱屁", 18, 11);

u11.sayHi("我是 ");
u11.sayAge();
u11.discount(1000);

console.log("------------类的静态方法------------");

class sm {
  static staticMethod() {
    console.log("该方法不会被实例继承，只能直接通过类调用");
  }
}

let ins = new sm();
try {
  ins.staticMethod();
} catch (error) {
  console.log(error);
}
sm.staticMethod();
