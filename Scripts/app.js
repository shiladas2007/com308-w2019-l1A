//let myGlobalVariable=0;
//anynomyous function which is automatically executed
//Self-Rxecuting Anonymous Function
//IIFE-Immediatly Invoked Function Expression
(function(){
    let myFuncionVariable=0
    
  /*  function Start() {
        let startVarible=0;
        console.log("App Started.....");
    }
window.addEventListener("load",Start);*/

let Start=function(){
    let startVarible=0;
    let myFuncionVariable=5;
    //myFuncionVariable="Tom"// it is allowed but not good to change datatype after initializtion
    //console.log("App Started.....");
    //console.log("%c App Started.."+startVarible, "font-size:20px;color:red");
    console.error(`%c App Started..${myFuncionVariable}`,
     "font-size:20px;color:red");
}
window.addEventListener("load",Start);
})();