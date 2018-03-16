// PART 6: Accessing static properties via Subclass constructor (the React way!!)
// ES6+ Stage2
// https://babeljs.io/blog/2015/06/07/react-on-es6-plus


class Parent {
    constructor() {
        console.log("CALLED PARENT CONSTRUCTOR")
        let childProperties = Object.getPrototypeOf(this).constructor.defaultValues;
        console.log("Child properties:")
        console.log(childProperties)
    }
}

class Child extends Parent {
    constructor() {
        super();
        console.log("CALLED CHILD CONSTRUCTOR")
    }

    static defaultValues = {
        name: "Perico"
    }
}

new Child();