class Students {
    id;
    name;
    address;
    age;

    constructor(id, name, address, age) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.age = age;
    }
    getId(){
        return this.id;
    }
    setId(){
        this.id = id;
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setAddress(address){
        this.address = address;
    }
    getAddress(){
        return this.address
    }
    setAge(age){
        this.age = age
    }
    getAge(){
        return this.age;
    }
}