export const name = "John";
export const age = 30;

// Default Export
let persn = ( a,b) => {

    return a+b;
}

 export let  loginClick =  (renderApp,renderLogin) => {
   var authenticated = true;
 
if (authenticated == false) {
    renderApp();
  } else {
    renderLogin();
  }

 }
 export let renderApp = () => {

    return alert("i am render ");
}

export let renderLogin = ()=> {
  return alert("i am not render")
}





 export const oldData = {
    dep: "IT",
    role: "deveoper"
  };



export default persn;