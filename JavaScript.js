window.onload = function () {
  const text = "Fashion is what you buy, style is what you do.";
  let i = 0;
  let opacity = 1;
  let timeoutID = null;

  function escribirTexto() {
    if (i < text.length) {
      document.getElementById("texto-container").innerHTML += text.charAt(i);
      i++;
      timeoutID = setTimeout(escribirTexto, 100);
    } else {
      setTimeout(desvanecerTexto, 15000);
    }
  }

  function desvanecerTexto() {
    if (opacity > 0) {
      opacity -= 0.1;
      document.getElementById("texto-container").style.opacity = opacity;
      timeoutID = setTimeout(desvanecerTexto, 100);
    } else {
      clearTimeout(timeoutID);
      document.getElementById("texto-container").innerHTML = "";
      opacity = 1;
      setTimeout(() => {
        escribirTexto();
      }, 3000);
    }
  }

  escribirTexto();

  var elementoTexto = document.getElementById("texto-container");

  elementoTexto.style.color = "yellow";
  elementoTexto.style.textShadow =
    "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black";
};

