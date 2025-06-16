document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const monto = parseFloat(document.getElementById("monto").value);
  const interes = parseFloat(document.getElementById("interes").value) / 100 / 12;
  const anios = parseInt(document.getElementById("anios").value);
  const nPagos = anios * 12;

  if (monto <= 0 || interes <= 0 || anios <= 0) {
    document.getElementById("resultado").textContent = "Por favor ingrese valores válidos.";
    return;
  }

  const cuota = monto * interes / (1 - Math.pow(1 + interes, -nPagos));
  document.getElementById("resultado").textContent = `Cuota mensual: €${cuota.toFixed(2)}`;
});