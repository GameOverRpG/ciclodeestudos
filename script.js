// Captura todos os elementos com a classe "materia"
const materias = document.querySelectorAll('.materia');

// Função para salvar o estado do checklist no localStorage
function salvarChecklist() {
    materias.forEach((materia) => {
        const quadrados = materia.querySelectorAll('input[type="checkbox"]');
        quadrados.forEach((quadrado, index) => {
            localStorage.setItem(`${materia.id}_quadrado_${index}`, quadrado.checked);
        });
    });
}

// Função para carregar o estado do checklist do localStorage
function carregarChecklist() {
    materias.forEach((materia) => {
        const quadrados = materia.querySelectorAll('input[type="checkbox"]');
        quadrados.forEach((quadrado, index) => {
            const estado = localStorage.getItem(`${materia.id}_quadrado_${index}`);
            if (estado === "true") {
                quadrado.checked = true;
            }
        });
    });
}

// Carrega o estado do checklist ao carregar a página
carregarChecklist();

// Adiciona um evento de clique a cada elemento
materias.forEach((materia) => {
    const quadrados = materia.querySelectorAll('input[type="checkbox"]');
    quadrados.forEach((quadrado, index) => {
        quadrado.addEventListener('click', () => {
            salvarChecklist();
        });
    });
});
