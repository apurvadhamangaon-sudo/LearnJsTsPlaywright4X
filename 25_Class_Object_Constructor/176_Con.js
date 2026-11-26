class Credentials{
#apiKey;

constructor(user, key) {
    this.user = user;
    this.#apiKey=key;
}
getApi(){
    return this.#apiKey;
}
}

let cred = new Credentials("admin", "#secret_Key_1234");
console.log(cred.user);
//console.log(cred.#apiKey);// Error: Private field '#apiKey' must be declared in an enclosing class
console.log(cred.getApi());
