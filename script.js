// Scroll flèches expérience
function scrollCarousel(direction) {
  const container = document.getElementById('experience-slider');
  const scrollAmount = 300;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Animation flip carte
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});

// Projets interactifs
const projects = {
  project1: {
    title: "Portfolio",
    date: "Mars 2025",
    summary: "Un portfolio personnel moderne avec animations CSS et responsive design.",
    link: "https://tonsite.com/portfolio"
  },
  project2: {
    title: "Jeu de drague",
    date: "Avril 2025",
    summary: "Prototype d’un jeu de visual novel style Amour Sucré pour le web.",
    link: "https://tonsite.com/jeu-drague"
  }
};

function openProject(projectId) {
  const project = projects[projectId];
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-date').textContent = project.date;
  document.getElementById('project-summary').textContent = project.summary;
  document.getElementById('project-link').href = project.link;
  document.getElementById('project-details').style.display = 'block';
}
