document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout-button");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  logoutButton.addEventListener("click", function () {
    // Simular cierre de sesión: redirigir a la página de inicio de sesión
    window.location.href = "index.html";
  });

  // Lógica de redirección para los botones adicionales
  button1.addEventListener("click", function () {
    window.location.href = "eleph.html";
    alert('redicionamento para elephantbet')
  });

  button2.addEventListener("click", function () {
    window.location.href = "plac.html";
  });
});
function gr(){
  alert('redicionamento para placard')
  window.location.href="plac.html"
}

function erro(){
  alert('erro 404')
}
function rt(){
  window.location.href="eleph.html"
alert('redicionamento para elephantbet')
}