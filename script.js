function checkQuality() {
  const commodity = document.getElementById('commodity').value;
  const doValue = parseFloat(document.getElementById('do').value);
  const tempValue = parseFloat(document.getElementById('temperature').value);
  const salinityValue = parseFloat(document.getElementById('salinity').value);
  const phValue = parseFloat(document.getElementById('ph').value);

  let result = '';
  let suggestion = '';

  // Define parameter ranges and suggestions for each commodity
  const commodities = {
    catfish: {
      name: 'Ikan Lele (Clarias sp.)',
      do: { ideal: [3, 5], low: 2, high: 7, suggestions: 'Tambah aerasi jika DO rendah. Cek fotosintesis jika terlalu tinggi.' },
      temp: { ideal: [25, 30], low: 20, high: 35, suggestions: 'Tambah pemanas jika suhu rendah. Naikkan aerasi jika suhu terlalu tinggi.' },
      ph: { ideal: [6.5, 8], low: 5.5, high: 9, suggestions: 'Tambah kapur jika pH rendah. Tambah asam organik jika terlalu tinggi.' },
    },
    tilapia: {
      name: 'Ikan Nila (Oreochromis niloticus)',
      do: { ideal: [5, 6], low: 3, high: 8, suggestions: 'Tambah aerasi jika rendah. Kurangi tanaman air jika terlalu tinggi.' },
      temp: { ideal: [26, 30], low: 22, high: 32, suggestions: 'Gunakan pemanas atau berikan naungan jika terlalu panas.' },
      ph: { ideal: [6, 8.1], low: 5.5, high: 9, suggestions: 'Tambah kapur jika pH rendah. Tambah asam organik jika terlalu tinggi.' },
    },
    koi: {
      name: 'Ikan Koi (Cyprinus carpio)',
      do: { ideal: [6, 8], low: 5, high: 9, suggestions: 'Tambah aerasi jika DO rendah. Kurangi aktivitas fotosintesis jika terlalu tinggi.' },
      temp: { ideal: [20, 28], low: 15, high: 30, suggestions: 'Tambah pemanas jika suhu rendah. Tambah aerasi jika suhu terlalu tinggi.' },
      ph: { ideal: [6.5, 8], low: 6, high: 9, suggestions: 'Tambah kapur jika pH rendah. Tambah asam organik jika terlalu tinggi.' },
    }
  };

  const selectedCommodity = commodities[commodity];

  // Check for DO
  if (doValue < selectedCommodity.do.low) {
    result += `Kualitas air tidak sesuai untuk ${selectedCommodity.name} karena DO terlalu rendah (${doValue} mg/L). `;
    suggestion += selectedCommodity.do.suggestions + " ";
  } else if (doValue > selectedCommodity.do.high) {
    result += `Kualitas air tidak sesuai untuk ${selectedCommodity.name} karena DO terlalu tinggi (${doValue} mg/L). `;
    suggestion += selectedCommodity.do.suggestions + " ";
  }

  // Check for Temperature
  if (tempValue < selectedCommodity.temp.low) {
    result += `Kualitas air tidak sesuai untuk ${selectedCommodity.name} karena Suhu terlalu rendah (${tempValue}°C). `;
    suggestion += selectedCommodity.temp.suggestions + " ";
  } else if (tempValue > selectedCommodity.temp.high) {
    result += `Kualitas air tidak sesuai untuk ${selectedCommodity.name} karena Suhu terlalu tinggi (${tempValue}°C). `;
    suggestion += selectedCommodity.temp.suggestions + " ";
  }

  // Check for pH
  if (phValue < selectedCommodity.ph.low) {
    result += `Kualitas air tidak sesuai untuk ${selectedCommodity.name} karena pH terlalu rendah (${phValue}). `;
    suggestion += selectedCommodity.ph.suggestions + " ";
  } else if (phValue > selectedCommodity.ph.high) {
    result += `Kualitas air tidak sesuai untuk ${selectedCommodity.name} karena pH terlalu tinggi (${phValue}). `;
    suggestion += selectedCommodity.ph.suggestions + " ";
  }

  // Default success message if all parameters are within ideal range
  if (result === '') {
    result = `Kualitas air sesuai untuk ${selectedCommodity.name}.`;
  }

  document.getElementById('result').innerHTML = result + "<br><br>" + suggestion;
}
