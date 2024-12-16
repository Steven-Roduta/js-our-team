const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// DOM Element
const listTeam = document.getElementById("list"); 

// Funzione per creare la card 
function createCard(member) {
  
  const card = document.createElement("div");
  card.className = "col p-4 bg-white shadow-lg rounded-lg"; 

  //immagine
  const teamInfo = document.createElement("div");
  teamInfo.className = "team-info";
  const teamCard = document.createElement("div");
  teamCard.className = "team-card";
  const image = document.createElement("img");
  image.src = member.img;
  image.alt = member.name;
  image.className = "w-full h-auto rounded-full"; 
  teamCard.appendChild(image);
  teamInfo.appendChild(teamCard);
  card.appendChild(teamInfo);

  //nome e ruolo
  const info = document.createElement("div");
  info.className = "info text-center mt-4"; 
  const name = document.createElement("h3");
  name.className = "font-semibold text-xl text-dark"; 
  name.textContent = member.name;
  const role = document.createElement("p");
  role.className = "text-base text-gray-600"; 
  role.textContent = member.role;
  info.appendChild(name);
  info.appendChild(role);
  card.appendChild(info);


  listTeam.appendChild(card);
}


teamMembers.forEach(member => {
  createCard(member);
});

