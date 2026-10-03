"use strict";

/* ===== efeito matrix rain ===== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ01$#<>/\\";
const fontSize = 14;
let columns = 0;
let drops = [];

function resizeMatrix() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array.from({ length: columns }, () => Math.random() * -canvas.height / fontSize);
}

function drawMatrix() {
  ctx.fillStyle = "rgba(10, 14, 18, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff9c";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

resizeMatrix();
window.addEventListener("resize", resizeMatrix);
setInterval(drawMatrix, 50);

/* ===== menu mobile ===== */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => nav.classList.toggle("nav--open"));
nav.querySelectorAll(".nav__link").forEach((link) =>
  link.addEventListener("click", () => nav.classList.remove("nav--open"))
);

/* ===== efeito typing ===== */
const frases = [
  "front-end em formação",
  "estudante de html, css e js",
  "aprendendo todos os dias",
  "construindo o futuro, um commit por vez",
];
const typedEl = document.getElementById("typed");
let fraseIdx = 0;
let charIdx = 0;
let apagando = false;

function typeEffect() {
  const atual = frases[fraseIdx];

  if (!apagando) {
    charIdx++;
    typedEl.textContent = atual.slice(0, charIdx);
    if (charIdx === atual.length) {
      apagando = true;
      setTimeout(typeEffect, 2200);
      return;
    }
    setTimeout(typeEffect, 70);
  } else {
    charIdx--;
    typedEl.textContent = atual.slice(0, charIdx);
    if (charIdx === 0) {
      apagando = false;
      fraseIdx = (fraseIdx + 1) % frases.length;
    }
    setTimeout(typeEffect, 40);
  }
}

typeEffect();

/* ===== skills (animação das barras ao aparecer) ===== */
const skills = [
  { nome: "HTML", nivel: 70 },
  { nome: "CSS", nivel: 55 },
  { nome: "JavaScript", nivel: 40 },
  { nome: "Git / GitHub", nivel: 30 },
  { nome: "Linux", nivel: 25 },
  { nome: "Inglês", nivel: 50 },
];

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach((s) => {
  const div = document.createElement("div");
  div.className = "skill";
  div.innerHTML = `
    <div class="skill__head">
      <span>${s.nome}</span>
      <span class="skill__value">${s.nivel}%</span>
    </div>
    <div class="skill__bar">
      <div class="skill__fill" data-level="${s.nivel}"></div>
    </div>
  `;
  skillsGrid.appendChild(div);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector(".skill__fill");
        fill.style.width = fill.dataset.level + "%";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

skillsGrid.querySelectorAll(".skill").forEach((skill) => observer.observe(skill));

/* ===== formulário de contato (placeholder) ===== */
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    formStatus.textContent = "> erro: preencha todos os campos";
    formStatus.style.color = "#ff2d55";
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    formStatus.textContent = "> erro: email inválido";
    formStatus.style.color = "#ff2d55";
    return;
  }

  formStatus.textContent = `> mensagem de ${nome} enviada com sucesso (demo)`;
  formStatus.style.color = "#00ff9c";
  form.reset();
});

/* ===== ano no footer ===== */
document.getElementById("year").textContent = new Date().getFullYear();