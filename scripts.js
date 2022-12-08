function lightmode() {
  let body = document.getElementById("bg");
  let btn_mode = document.getElementById("btn-mode");

  if (body.classList.contains("active")) {
    body.classList.remove("active");
    btn_mode.innerText = "toggle_off";
  } else {
    body.classList.add("active");
    btn_mode.innerText = "toggle_on";
  }
}
