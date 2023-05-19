
(function(exports,require, module, __dirname, __filename){

    const people =['anis', 'ahad', 'jahed'];
    const test= 5;
    function anis(){
        console.log("hello world");
    }
    console.log(module)
    module.exports= people;
    return module.exports;
})

/*
note:
iffe function:

(function (){

})();

*/