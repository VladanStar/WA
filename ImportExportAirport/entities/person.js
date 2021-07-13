function Person(name, surname) {
    if (!name || !surname){
        throw new Error('Field name and surname are required');
    };
    this.name =  name;
    this.surname = surname;
    this.getData = function(){
        return `${this.name} ${this.surname}`//this.name + ' ' + this.surname;
    }
}

module.exports =  Person;