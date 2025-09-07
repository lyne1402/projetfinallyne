const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // empêche le rechargement de la page

  // récupérer les valeurs
  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const sujet = document.getElementById("sujet").value.trim();
  const message = document.getElementById("message").value.trim();

  // vérifier si tous les champs sont remplis
  if (prenom === "" || nom === "" || sujet === "" || message === "") {
    console.log("❌ Veuillez remplir tous les champs."); // affichage console
  } else {
    feedback.style.color = "limegreen";
    feedback.textContent = "✅ Merci " + prenom + "! Votre message a été envoyé avec succès.";

    form.reset(); // efface les champs après envoi

    // faire disparaître le message après 2 secondes
    setTimeout(() => {
      feedback.textContent = "";
    }, 2000);
  }
});
