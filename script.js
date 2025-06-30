// Imagen con borde (solo si existe el elemento)
const imagen = document.getElementById("toggleImage");
if (imagen) {
  imagen.addEventListener("click", () => {
    if (imagen.style.border) {
      imagen.style.border = "";
    } else {
      imagen.style.border = "2px solid red";
    }
  });
}

// Stickers
function verificarStickers() {
  const s1 = parseInt(document.getElementById('s1').value) || 0;
  const s2 = parseInt(document.getElementById('s2').value) || 0;
  const s3 = parseInt(document.getElementById('s3').value) || 0;
  const total = s1 + s2 + s3;
  const resultado = document.getElementById('resultadoStickers');
  const banner = document.getElementById('banner');

  if (total <= 10) {
    resultado.textContent = `Llevas ${total} stickers`;
    banner.style.display = "none";
  } else {
    resultado.textContent = "Llevas demasiados stickers";
    banner.style.display = "block";
    setTimeout(() => {
      banner.style.display = "none";
    }, 2000);
  }
}

// Verificar de contraseña
function verificarPassword() {
  const p1 = document.getElementById("digit1").value;
  const p2 = document.getElementById("digit2").value;
  const p3 = document.getElementById("digit3").value;
  const password = p1 + p2 + p3;
  const resultado = document.getElementById("resultadoPassword");

  if (password === "911") {
    resultado.innerText = "password 1 correcto";
  } else if (password === "714") {
    resultado.innerText = "password 2 correcto";
  } else {
    resultado.innerText = "password incorrecto";
  }
}
