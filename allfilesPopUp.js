export function allstyle(){
const allStyle = `
<style>
#sucessfullySignUp{
  position: fixed;
  border: 1px solid green;
  bottom: 30px;
  left: 110px;
  background: white;
  color: darkgreen;
  width: 60%;
  height: 50px;
  animation: success 1s ease-in;
  border-radius: 3px;
  padding-left: 20px;
}
@keyframes success{
  from{bottom: 0;
    opacity: 0;
  }
  to{bottom: 30px;
    opacity: 1;
  }
}
#sucessfullySignUp img{
  width: 30px;
  height: 30px;
  position: absolute;
right: 180px;
margin-top: -10px;

}
#failedLogin{
  position: fixed;
  border: 1px solid red;
  bottom: 30px;
  left: 80px;
  background: white;
  color: red;
  width: 60%;
  height: 50px;
  animation: pop 1s ease-in;
  border-radius: 10px;
  padding-left: 30px;
}
@keyframes pop{
  from{bottom: 0;
    opacity: 0;
  }
  to{bottom: 30px;
    opacity: 1;
  }
}
#failedLogin img{
  width: 30px;
  height: 30px;
  position: absolute;
right: 185px;
margin-top: -10px;

}
#secessfullupdate{
  position: fixed;
  border: 1px solid green;
  bottom: 30px;
  left: 110px;
  background: white;
  color: darkgreen;
  width: 60%;
  height: 50px;
  animation: success 1s ease-in;
  border-radius: 3px;
  padding-left: 20px;
}
@keyframes success{
  from{bottom: 0;
    opacity: 0;
  }
  to{bottom: 30px;
    opacity: 1;
  }
}
#secessfullupdate img{
  width: 30px;
  height: 30px;
  position: absolute;
right: 180px;
margin-top: -10px;

}
#success{
  position: fixed;
  border: 1px solid green;
  bottom: 30px;
  left: 110px;
  background: white;
  color: darkgreen;
  width: 60%;
  height: 50px;
  animation: success 1s ease-in;
  border-radius: 3px;
  padding-left: 20px;
}
@keyframes success{
  from{bottom: 0;
    opacity: 0;
  }
  to{bottom: 30px;
    opacity: 1;
  }
}
#success img{
  width: 30px;
  height: 30px;
  position: absolute;
right: 180px;
margin-top: -10px;

}
</style>`

document.head.insertAdjacentHTML("beforeend",allStyle)}
function showPopup(id, content, duration = 3000) {
  // Check if popup already exists
  let popup = document.getElementById(id);

  if (!popup) {
    // Create once
    popup = document.createElement("button");
    popup.id = id;
    popup.innerHTML = content;
    document.body.appendChild(popup);
  } else {
    // Update content in case it changed
    popup.innerHTML = content;
  }

  // Make it visible
  popup.style.display = "block";

  // Auto-hide after duration
  clearTimeout(popup.hideTimeout);
  popup.hideTimeout = setTimeout(() => {
    popup.style.display = "none";
  }, duration);
}

// Now we can define your functions using showPopup:

export function updatedSeccesfull() {
  showPopup(
    "secessfullupdate",
    `<img src="http://cdn.jsdelivr.net/gh/fieme-one/Cacha-fitness@main/check-circle.png"> updated successfully`
  );
}

export function signedUpPop() {
  showPopup(
    "sucessfullySignUp",
    `<img src="http://cdn.jsdelivr.net/gh/fieme-one/Cacha-fitness@main/check-circle.png"> signed up successfully`
  );
}

export function failedLogin() {
  showPopup(
    "failedLogin",
    `<img src="http://cdn.jsdelivr.net/gh/fieme-one/Cacha-fitness@main/cross-circle.png"> wrong email or password`
  );
}

export function success() {
  showPopup(
    "success",
    `<img src="http://cdn.jsdelivr.net/gh/fieme-one/Cacha-fitness@main/check-circle.png"> created successfully`
  );
}