const select = document.getElementById('font-size-select');
  const content = document.querySelector('main');

  select.addEventListener('change', () => {
    const size = select.value;
    content.classList.remove('text-lg','text-xl','text-2xl');
    switch(size) {
      case 'small':
        content.classList.add('text-lg'); 
        break;
      case 'medium':
        content.classList.add('text-xl');
        break;
      case 'large':
        content.classList.add('text-2xl');
        break;
    }
  });