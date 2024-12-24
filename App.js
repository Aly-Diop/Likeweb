// Charger les données JSON fictives
fetch('Lya.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

const data = {
    Lya: {
      title: "Boostez votre impact digital grâce au community management",
      description: "Créez une communauté en ligne engagée et développez votre visibilité au Sénégal et ailleurs.",
      cta: "Contactez-nous"
    },
    services: [
      {
        title: "Gestion des Réseaux Sociaux",
        description: "Nous gérons vos comptes sur les plateformes sociales pour maximiser votre audience et renforcer votre image de marque."
      },
      {
        title: "Création de Contenus",
        description: "Du contenu attractif et engageant pour captiver et fidéliser votre audience."
      },
      {
        title: "Analyse et Reporting",
        description: "Des données précises pour mesurer l'efficacité de votre présence en ligne et ajuster votre stratégie."
      }
    ],
    about: {
      title: "À Propos de Nous",
      description: "Chez Impact Digital, nous croyons en la puissance des communautés en ligne pour transformer votre présence digitale. Basés au Sénégal, nous accompagnons les entreprises et les entrepreneurs dans leur quête de visibilité et d'engagement."
    },
    testimonials: [
      {
        quote: "Grâce à Impact Digital, notre communauté en ligne a doublé en trois mois. Leur expertise est inégalée !",
        author: "Aïssatou, entrepreneure"
      },
      {
        quote: "Un service professionnel et des résultats impressionnants. Je recommande vivement !",
        author: "Mamadou, directeur marketing"
      }
    ]
  };
  
  // Remplir la section hero
  const heroSection = document.querySelector("Lya.json");
  heroSection.innerHTML = `
    <h2>${data.Lya.title}</h2>
    <p>${data.Lya.description}</p>
    <a href="#contact" class="btn">${data.Lya.cta}</a>
  `;
  
  // Remplir la section services
  const servicesContainer = document.querySelector("#services .services-list");
  servicesContainer.innerHTML = data.services.map(service => `
    <div class="service">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join("");
  
  // Remplir la section about
  const aboutSection = document.querySelector("#about .container");
  aboutSection.innerHTML = `
    <h2>${data.about.title}</h2>
    <p>${data.about.description}</p>
  `;
  
  // Remplir la section testimonials
  const testimonialsContainer = document.querySelector("#testimonials .testimonials-list");
  testimonialsContainer.innerHTML = data.testimonials.map(testimonial => `
    <div class="testimonial">
      <p>"${testimonial.quote}"</p>
      <cite>- ${testimonial.author}</cite>
    </div>
  `).join("");
  
  // Fonction pour filtrer les services par mot-clé
  function filterServices(keyword) {
    const filteredServices = data.services.filter(service =>
      service.title.toLowerCase().includes(keyword.toLowerCase()) ||
      service.description.toLowerCase().includes(keyword.toLowerCase())
    );
  
    servicesContainer.innerHTML = filteredServices.map(service => `
      <div class="service">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `).join("");
  }
  
  // Exemple d'utilisation : Filtrer les services avec le mot-clé "contenu"
  filterServices("contenu");
  