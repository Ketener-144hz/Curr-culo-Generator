// Coletar os dados do formulário quando o botão de gerar currículo for clicado
document.getElementById("curriculum-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Coletar os dados inseridos no formulário
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const linkedin = document.getElementById("linkedin").value;
    const summary = document.getElementById("summary").value;
  
    // Coletar dados de experiência
    const experienceFields = document.querySelectorAll(".experience");
    const experiences = [];
    experienceFields.forEach((field) => {
      const jobTitle = field.querySelector(".job-title").value;
      const company = field.querySelector(".company").value;
      const period = field.querySelector(".period").value;
      const responsibilities = field.querySelector(".responsibilities").value;
      
      experiences.push({
        jobTitle,
        company,
        period,
        responsibilities,
      });
    });
  
    // Coletar dados de educação, idiomas e competências
    const education = document.getElementById("education").value;
    const languages = document.getElementById("languages").value;
    const skills = document.getElementById("skills").value;
  
    // Exibir os dados coletados na seção de resultado
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-contact").textContent = `Telefone: ${phone} | E-mail: ${email} | LinkedIn: ${linkedin || "N/A"}`;
    document.getElementById("output-summary").textContent = summary;
  
    // Preencher a lista de experiências
    const experienceList = document.getElementById("output-experience");
    experienceList.innerHTML = "";
    experiences.forEach((exp) => {
      const li = document.createElement("li");
      li.textContent = `${exp.jobTitle} - ${exp.company} (${exp.period}): ${exp.responsibilities}`;
      experienceList.appendChild(li);
    });
  
    // Exibir os dados de educação, idiomas e competências
    document.getElementById("output-education").textContent = education;
    document.getElementById("output-languages").textContent = languages || "N/A";
    document.getElementById("output-skills").textContent = skills || "N/A";
  
    // Mostrar o currículo gerado
    document.getElementById("curriculum-output").classList.remove("hidden");
  });
  
  // Alternar entre modo claro e modo escuro
  document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
    document.querySelectorAll("h1, h2, p").forEach((el) => el.classList.toggle("dark-mode"));
    this.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "🌞";
  });
  