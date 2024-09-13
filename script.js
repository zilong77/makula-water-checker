function checkQuality() {
  const commodity = document.getElementById("commodity").value;
  const doValue = parseFloat(document.getElementById("do").value);
  const temperature = parseFloat(document.getElementById("temperature").value);
  const salinity = parseFloat(document.getElementById("salinity").value);
  const ph = parseFloat(document.getElementById("ph").value);

  let result = '';
  let issues = [];

  if (commodity === "tilapia") {
    // Cek kondisi DO
    if (doValue < 5 || doValue > 6) {
      issues.push(`DO ${doValue < 5 ? "kurang dari" : "lebih dari"} batas normal, yakni ${doValue < 5 ? 5 : 6} mg/L`);
    }

    // Cek kondisi Suhu
    if (temperature < 26 || temperature > 29) {
      issues.push(`Suhu ${temperature < 26 ? "kurang dari" : "lebih dari"} batas normal, yakni ${temperature < 26 ? 26 : 29}°C`);
    }

    // Cek kondisi Salinitas
    if (salinity < 1 || salinity > 2) {
      issues.push(`Salinitas ${salinity < 1 ? "kurang dari" : "lebih dari"} batas normal, yakni ${salinity < 1 ? 1 : 2} ppm`);
    }

    // Cek kondisi pH
    if (ph < 6 || ph > 7) {
      issues.push(`pH ${ph < 6 ? "kurang dari" : "lebih dari"} batas normal, yakni ${ph < 6 ? 6 : 7}`);
    }

    if (issues.length === 0) {
      result = "Kualitas air sesuai untuk Ikan Nila";
    } else {
      result = "Kualitas air tidak sesuai untuk Ikan Nila karena: " + issues.join(" dan ");
    }

  } else if (commodity === "shrimp") {
    // Masukkan parameter ideal dan logika untuk Udang
  } else if (commodity === "catfish") {
    // Masukkan parameter ideal dan logika untuk Ikan Lele
  }

  document.getElementById("result").innerHTML = result;
}
