function mostrarInfo(indice) {
    const infos = document.querySelectorAll('.info');
    infos.forEach((info, i) => {
      if (i === indice) {
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
      } else {
        info.style.display = 'none';
      }
    });
  }
  
