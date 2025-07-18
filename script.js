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

const educationData = [
  {
    date: "2017 - 2020",
    title: "Bac S",
    school: "Lycée Henri Bergson - Angers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ISIMA_logo.svg/120px-ISIMA_logo.svg.png",
    details: [
      "Spécialité informatique et réseaux",
      "Projets web interactifs, IA, et gestion d'équipe",
      "Compétences : C, Python, HTML/CSS/JS, gestion de projet, UI/UX"
    ]
  },
  {
    date: "2020 - 2022",
    title: "Classe Prépa PTSI-PT",
    school: "Lycée Chevrollier - Angers",
    logo: "LOGO/chevrollier.png",
    details: [
      "Spécialité Mathématiques",
      "Engagement dans des activités associatives",
      "Premiers projets de design (Canva, blogs)"
    ]
  },
  {
    date: "2022 - 2023",
    title: "Classe Prépa PT",
    school: "Lycée Vaucanson - Tours",
    logo: "LOGO/vaucanson.png",
    details: [
      "Maths, Physique, Informatique théorique",
      "Développement d'autonomie et rigueur",
      "Compétences : raisonnement logique, travail intensif, analyse"
    ]
  },
  {
    date: "2023 - Présent",
    title: "Cycle ingénieur",
    school: "ISIMA - Clermont-Ferrand",
    logo: "LOGO/isima.png", // Chemin vers l'image du logo
    details: [
      "Spécialité informatique et réseaux",
      "Projets web interactifs, IA, et gestion d'équipe",
      "Compétences : C, Python, HTML/CSS/JS, gestion de projet, UI/UX"
    ]
  }
];

const timelineContainer = document.querySelector(".edu-timeline");
const titleEl = document.getElementById("edu-title");
const schoolEl = document.getElementById("edu-school");
const listEl = document.getElementById("edu-details-list");
const eduDetails = document.querySelector(".edu-details");

const previewBox = document.getElementById("edu-preview");
const previewTitle = document.getElementById("edu-hover-title");
const previewLogo = document.getElementById("edu-logo");

const buttons = []; // Nouveau : stocke tous les boutons

educationData.forEach((item, index) => {
  const btn = document.createElement("button");
  btn.title = item.date;

  btn.addEventListener("click", () => {
    titleEl.textContent = `${item.date} — ${item.title}`;
    schoolEl.textContent = item.school;
    listEl.innerHTML = "";
    item.details.forEach(line => {
      const div = document.createElement("div");
      div.classList.add("edu-box");
      div.textContent = line;
      listEl.appendChild(div);
    });
  });

  timelineContainer.appendChild(btn);
});

  // Gestion hover comme avant
  btn.addEventListener("mouseenter", () => {
  previewTitle.textContent = item.title;
  previewLogo.src = item.logo;
  previewLogo.alt = item.school;
  previewBox.style.display = "flex";
  previewBox.style.left = `${btn.offsetLeft}px`;

  previewLogo.onerror = function() {
    console.warn("Logo non chargé :", previewLogo.src);
  };

  console.log("Preview affichée avec logo:", item.logo);
});

  btn.addEventListener("mouseleave", () => {
    previewBox.style.display = "none";
  });
  
  timelineContainer.appendChild(btn);
  buttons.push(btn); // Ajoute au tableau
});

function showEducationDetails(index) {
  const data = educationData[index];
  titleEl.textContent = `${data.date} — ${data.title}`;
  schoolEl.textContent = data.school;
  listEl.innerHTML = "";
  data.details.forEach(line => {
    const li = document.createElement("li");
    li.textContent = line;
    listEl.appendChild(li);
  });

  eduDetails.classList.add("visible");
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
