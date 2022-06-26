let toggle = button => {
  let element = document.getElementById("listaTinta");
  let hidden = element.getAttribute("hidden");

  if (hidden) {
     element.removeAttribute("hidden");
     button.innerText = "Hide list";
  } else {
     element.setAttribute("hidden", "hidden");
     button.innerText = "Show list";
  }
}