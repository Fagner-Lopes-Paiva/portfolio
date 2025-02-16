const botaoSkill = document.getElementById('botao-skill');
const botaoIdioma = document.getElementById('botao-idioma');
const botaoEducacao = document.getElementById('botao-educacao');
const botaoPortifolio = document.getElementById('botao-portifolio');
const botaoExperiencia = document.getElementById('botao-experiencia');

const conteinerDaSecaoDeInformacao_1 = document.getElementsByClassName("secaoDeImformacao")[0];
const conteinerDaSecaoDeInformacao_2 = document.getElementsByClassName("secaoDeImformacao")[1];
const conteinerDaSecaoDeInformacao_3 = document.getElementsByClassName("secaoDeImformacao")[2];
const conteinerDaSecaoDeInformacao_4 = document.getElementsByClassName("secaoDeImformacao")[3];
const conteinerDaSecaoDeInformacao_5 = document.getElementsByClassName("secaoDeImformacao")[4];

const seta_1 = document.getElementsByClassName("material-symbols-outlined")[0];
const seta_2 = document.getElementsByClassName("material-symbols-outlined")[1];
const seta_3 = document.getElementsByClassName("material-symbols-outlined")[2];
const seta_4 = document.getElementsByClassName("material-symbols-outlined")[3];
const seta_5 = document.getElementsByClassName("material-symbols-outlined")[4];

const conteinerDinamico_1 = document.getElementsByClassName("habilidades")[0];
const conteinerDinamico_2 = document.getElementsByClassName("habilidades")[1];

const conteinerDoGithub_1 = document.getElementsByClassName("github")[0];
const conteinerDoGithub_2 = document.getElementsByClassName("github")[1];
const conteinerDoGithub_a = document.getElementsByClassName("github")[2];
const conteinerDoGithub_b = document.getElementsByClassName("github")[3];

const conteinerIdioma = document.getElementById("idioma");
const conteinerConquista = document.getElementById("conquistas");
const conteinerLocalDoCurso = document.getElementById("local-do-curso");

let setaPraCima_1 = 0;

let conteiner = 0;
let conteiner_1 = 0;
let conteiner_2 = 0;
let conteiner_3 = 0;
let conteiner_4 = 0;

botaoSkill.addEventListener("click", () => {
    
    if (conteinerDaSecaoDeInformacao_1 && seta_1 && conteinerDinamico_1 && conteinerDinamico_2) {
        const estilos = window.getComputedStyle(conteinerDaSecaoDeInformacao_1);
        const corAtual = estilos.backgroundColor;
        const bordaAtual = estilos.borderColor;
        
        if (setaPraCima_1 === 0) {
            seta_1.style.transform = "rotateX(180deg)";
            setaPraCima_1 = 180;
        } else {
            seta_1.style.transform = "rotateX(0deg)";
            setaPraCima_1 = 0;
        }

        if (conteiner === 0) {
            conteinerDinamico_1.style.display = "flex";
            conteinerDinamico_2.style.display = "flex";
            conteiner = 10;
        } else {
            conteinerDinamico_1.style.display = "none";
            conteinerDinamico_2.style.display = "none";
            conteiner = 0;
        }

        if (corAtual === "rgb(85, 86, 158)" && bordaAtual === "rgb(85, 86, 158)") {
            // Se já estiver roxo, volta ao padrão (fundo transparente e borda branca)
            conteinerDaSecaoDeInformacao_1.style.backgroundColor = "transparent";
            conteinerDaSecaoDeInformacao_1.style.borderColor = "#ffffff"; // Branco
            
        } else {
            // Caso contrário, fica roxo
            conteinerDaSecaoDeInformacao_1.style.backgroundColor = "#55569E";
            conteinerDaSecaoDeInformacao_1.style.borderColor = "#55569E"; // Roxo
            
        }
    }
    
});

let setaPraCima_2 = 0;

botaoIdioma.addEventListener("click", () => {
    if (conteinerDaSecaoDeInformacao_2 && seta_2 && conteinerIdioma) {
        const estilos = window.getComputedStyle(conteinerDaSecaoDeInformacao_2);
        const corAtual = estilos.backgroundColor;
        const bordaAtual = estilos.borderColor;

        if (setaPraCima_2 === 0) {
            seta_2.style.transform = "rotateX(180deg)";
            setaPraCima_2 = 180;
        } else {
            seta_2.style.transform = "rotateX(0deg)";
            setaPraCima_2 = 0;
        }
        
        if (conteiner_1 === 0) {
            conteinerIdioma.style.display = "flex";
            conteiner_1 = 10;
        } else {
            conteinerIdioma.style.display = "none";
            conteiner_1 = 0;
        }

        if (corAtual === "rgb(85, 86, 158)" && bordaAtual === "rgb(85, 86, 158)") {
            // Se já estiver roxo, volta ao padrão (fundo transparente e borda branca)
            conteinerDaSecaoDeInformacao_2.style.backgroundColor = "transparent";
            conteinerDaSecaoDeInformacao_2.style.borderColor = "#ffffff"; // Branco
        } else {
            // Caso contrário, fica roxo
            conteinerDaSecaoDeInformacao_2.style.backgroundColor = "#55569E";
            conteinerDaSecaoDeInformacao_2.style.borderColor = "#55569E"; // Roxo
        }
    }
});

let setaPraCima_3 = 0;

botaoEducacao.addEventListener("click", () => {
    if (conteinerDaSecaoDeInformacao_3 && seta_3 && conteinerConquista && conteinerLocalDoCurso) {
        const estilos = window.getComputedStyle(conteinerDaSecaoDeInformacao_3);
        const corAtual = estilos.backgroundColor;
        const bordaAtual = estilos.borderColor;

        if (setaPraCima_3 === 0) {
            seta_3.style.transform = "rotateX(180deg)";
            setaPraCima_3 = 180;
        } else {
            seta_3.style.transform = "rotateX(0deg)";
            setaPraCima_3 = 0;
        }

        if (conteiner_2 === 0) {
            conteinerConquista.style.display = "flex";
            conteinerLocalDoCurso.style.display = "flex";
            conteiner_2 = 10;
        } else {
            conteinerConquista.style.display = "none";
            conteinerLocalDoCurso.style.display = "none";
            conteiner_2 = 0;
        }

        if (corAtual === "rgb(85, 86, 158)" && bordaAtual === "rgb(85, 86, 158)") {
            // Se já estiver roxo, volta ao padrão (fundo transparente e borda branca)
            conteinerDaSecaoDeInformacao_3.style.backgroundColor = "transparent";
            conteinerDaSecaoDeInformacao_3.style.borderColor = "#ffffff"; // Branco
        } else {
            // Caso contrário, fica roxo
            conteinerDaSecaoDeInformacao_3.style.backgroundColor = "#55569E";
            conteinerDaSecaoDeInformacao_3.style.borderColor = "#55569E"; // Roxo
        }
    }
});

let setaPraCima_4 = 0;

botaoPortifolio.addEventListener("click", () => {
    if (conteinerDaSecaoDeInformacao_4 && seta_4 && conteinerDoGithub_1 && conteinerDoGithub_2 && conteinerDoGithub_a && conteinerDoGithub_b) {
        const estilos = window.getComputedStyle(conteinerDaSecaoDeInformacao_4);
        const corAtual = estilos.backgroundColor;
        const bordaAtual = estilos.borderColor;

        if (setaPraCima_4 === 0) {
            seta_4.style.transform = "rotateX(180deg)";
            setaPraCima_4 = 180;
        } else {
            seta_4.style.transform = "rotateX(0deg)";
            setaPraCima_4 = 0;
        }

        if (conteiner_3 === 0) {
            conteinerDoGithub_1.style.display = "flex";
            conteinerDoGithub_2.style.display = "flex";
            conteinerDoGithub_a.style.display = "flex";
            conteinerDoGithub_b.style.display = "flex";
            conteiner_3 = 10;
        } else {
            conteinerDoGithub_1.style.display = "none";
            conteinerDoGithub_2.style.display = "none";
            conteinerDoGithub_a.style.display = "none";
            conteinerDoGithub_b.style.display = "none";
            conteiner_3 = 0;
        }

        if (corAtual === "rgb(85, 86, 158)" && bordaAtual === "rgb(85, 86, 158)") {
            // Se já estiver roxo, volta ao padrão (fundo transparente e borda branca)
            conteinerDaSecaoDeInformacao_4.style.backgroundColor = "transparent";
            conteinerDaSecaoDeInformacao_4.style.borderColor = "#ffffff"; // Branco
        } else {
            // Caso contrário, fica roxo
            conteinerDaSecaoDeInformacao_4.style.backgroundColor = "#55569E";
            conteinerDaSecaoDeInformacao_4.style.borderColor = "#55569E"; // Roxo
        }
    }
});

let setaPraCima_5 = 0;

botaoExperiencia.addEventListener("click", () => {
    if (conteinerDaSecaoDeInformacao_5 && seta_5) {
        const estilos = window.getComputedStyle(conteinerDaSecaoDeInformacao_5);
        const corAtual = estilos.backgroundColor;
        const bordaAtual = estilos.borderColor;

        if (setaPraCima_5 === 0) {
            seta_5.style.transform = "rotateX(180deg)";
            setaPraCima_5 = 180;
        } else {
            seta_5.style.transform = "rotateX(0deg)";
            setaPraCima_5 = 0;
        }

        if (corAtual === "rgb(85, 86, 158)" && bordaAtual === "rgb(85, 86, 158)") {
            // Se já estiver roxo, volta ao padrão (fundo transparente e borda branca)
            conteinerDaSecaoDeInformacao_5.style.backgroundColor = "transparent";
            conteinerDaSecaoDeInformacao_5.style.borderColor = "#ffffff"; // Branco
        } else {
            // Caso contrário, fica roxo
            conteinerDaSecaoDeInformacao_5.style.backgroundColor = "#55569E";
            conteinerDaSecaoDeInformacao_5.style.borderColor = "#55569E"; // Roxo
        }
    }
});
