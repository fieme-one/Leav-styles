export async function popLOGIN(param) {
  var pop = document.getElementById("popUpLogin")
  if(!pop){
    pop = document.createElement('div')
    pop.className = "popLOGIN"
    pop.id="popUpLogin"
    pop.style=`justify-content: center;
  color: #888;
  position: fixed;
  top: 30px;
  left: 160px;
  z-index: 1000000;
  justify-self: center;
  background: white;
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  animation: slow 0.5s ease-in-out;display: flex;
`
document.body.appendChild(pop)
  }
  pop.innerHTML = `<span>login in...</span>`
}
export function stopAllPop(){
  var pops = document.querySelector(".popLOGIN")
  pops.remove()
}