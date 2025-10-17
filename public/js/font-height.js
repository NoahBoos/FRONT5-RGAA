const select = document.getElementById('font-size-select');
const content = document.querySelector('main');
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const p = document.querySelectorAll("p");
const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const a = document.querySelectorAll("a");

// Définition des tailles par élément
const sizes = {
  small: {
    p: 'text-lg',
    label: 'text-lg',
    input: 'text-lg',
    a: 'text-lg',
    h3: 'text-xl',
    h2: 'text-2xl',
    h1: 'text-3xl'
  },
  medium: {
    p: 'text-xl',
    label: 'text-xl',
    input: 'text-xl',
    a: 'text-xl',
    h3: 'text-2xl',
    h2: 'text-3xl',
    h1: 'text-4xl'
  },
  large: {
    p: 'text-2xl',
    label: 'text-2xl',
    input: 'text-2xl',
    a: 'text-2xl',
    h3: 'text-3xl',
    h2: 'text-4xl',
    h1: 'text-4xl'
  }
};

// Liste complète des classes à retirer
const allClasses = ['text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-4xl'];

select.addEventListener('change', () => {
  const size = select.value;

  // Fonction pour appliquer les classes correctement
  function applySize(elements, newClass) {
    elements.forEach(el => {
      el.classList.remove(...allClasses);
      el.classList.add(newClass);
    });
  }

  applySize(p, sizes[size].p);
  applySize(label, sizes[size].label);
  applySize(input, sizes[size].input);
  applySize(a, sizes[size].a);
  applySize(h3, sizes[size].h3);
  applySize(h2, sizes[size].h2);
  applySize(h1, sizes[size].h1);
});
