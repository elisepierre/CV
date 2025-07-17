// Expériences
const experiences = [
  {
    titre: "Employée clientèle",
    entreprise: "Irigo",
    logo: "LOGO/irigo.png",
    periode: "Été 2022",
    description: "Accueil des clients, vente de titres de transport, gestion des réclamations."
  },
  {
    titre: "Agente de service",
    entreprise: "Papillotte et Cie",
    logo: "LOGO/papillotte_et_cie.png",
    periode: "Été 2023",
    description: "Service des repas, ménage."
  },
  {
    titre: "Tutrice étudiants internationaux",
    entreprise: "ISIMA - INP Clermont Auvergne",
    logo: "LOGO/isima.png",
    periode: "septembre 2023 - mai 2024",
    description: "Accompagnement des étudiants internationaux dans leur intégration."
  },
  {
    titre: "Présidente du BDE (Bureau Des Etudiants)",
    entreprise: "AEI ISIMA",
    logo: "LOGO/bde.png",
    periode: "février 2024 - février 2025",
    description: "Management d'une équipe de 15 personnes, organisation des événements étudiants, intégration des nouveaux élèves."
  },
  {
    titre: "Enseignante à domicile",
    entreprise: "Complétude",
    logo: "LOGO/completude.png",
    periode: "Mars 2024 - Juin 2025",
    description: "Soutien scolaire niveau lycée en mathématiques."
  },
  {
    titre: "Agente à domicile",
    entreprise: "Daphné",
    logo: "LOGO/daphne.png",
    periode: "Été 2024",
    description: "Aide aux personnes âgées : courses, repas, ménage."
  },
  {
    titre: "Employée polyvalente",
    entreprise: "Les Filous",
    logo: "LOGO/filous.png",
    periode: "Depuis mars 2025",
    description: "Préparation des commandes, accueil client, encaissement."
  }
];

// Injection dynamique des expériences
const container = document.getElementById('experience-slider');
experiences.forEach(exp => {
  const card = document.createElement('div');
  card.className = 'experience-item flip-card';
  card.innerHTML = `
    <div class="flip-inner">
      <div class="flip-front">
        <div class="experience-title">${exp.titre}</div>
        <img src="${exp.logo}" alt="Logo ${exp.entreprise}" class="experience-logo" />
        <div class="experience-company">${exp.entreprise}</div>
      </div>
      <div class="flip-back">
        <h3>${exp.entreprise}</h3>
        <p><strong>Période :</strong> ${exp.periode}</p>
        <p>${exp.description}</p>
      </div>
    </div>
  `;
  container.appendChild(card);

  // Active l’animation en rendant les cartes visibles
  setTimeout(() => {
    document.querySelectorAll('.experience-item').forEach(card => {
      card.style.opacity = '1';
    });
  }, 100); 
});

// Effet flip au clic
document.addEventListener('click', function(e) {
  if (e.target.closest('.flip-card')) {
    e.target.closest('.flip-card').classList.toggle('flipped');
  }
});

// Scroll flèches
function scrollCarousel(direction) {
  const container = document.getElementById('experience-slider');
  const scrollAmount = 300;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Projets
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
    summary: "Prototype d’un visual novel web style Amour Sucré.",
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
