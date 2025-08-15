const themeToggle=document.getElementById("themeToggle"),themeIcon=document.getElementById("themeIcon"),themeText=document.getElementById("themeText"),body=document.body,navLinks=document.querySelectorAll(".nav-link"),pages=document.querySelectorAll(".page");

let currentTheme=localStorage.getItem("theme")||"dark";
body.setAttribute("data-theme",currentTheme);
updateThemeButton(currentTheme);

themeToggle.onclick=()=>{
  let t=body.getAttribute("data-theme"),n=t==="dark"?"light":"dark";
  body.setAttribute("data-theme",n);
  localStorage.setItem("theme",n);
  updateThemeButton(n);
};

function updateThemeButton(t){
  if(t==="dark"){themeIcon.textContent="🌙";themeText.textContent="Dark"}
  else{themeIcon.textContent="☀️";themeText.textContent="Light"}
}

function showPage(id){
  pages.forEach(p=>p.classList.remove("active"));
  navLinks.forEach(l=>l.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelector(`[data-page="${id}"]`).classList.add("active");
}

document.querySelectorAll("[data-page]").forEach(el=>{
  el.onclick=e=>{
    e.preventDefault();
    showPage(el.getAttribute("data-page"));
  }
});

window.onload=()=>body.style.opacity="1";

// Blog posts array
const posts=[
  {title:"Getting Started with Modern Web Development",desc:"Explore the latest trends and technologies in web development, from React to serverless architectures.",date:"Jan 15, 2025",link:"blog-post.html"},
  {title:"The Future of AI in Software Development",desc:"How artificial intelligence is reshaping the way we write, test, and deploy code in 2025.",date:"Jan 12, 2025",link:"#"},
  {title:"Building Scalable Applications",desc:"Best practices for creating applications that can grow with your user base and business needs.",date:"Jan 08, 2025",link:"#"},
  {title:"CSS Grid vs Flexbox: When to Use What",desc:"A comprehensive guide to choosing the right layout method for your web projects.",date:"Jan 05, 2025",link:"#"},
  {title:"Performance Optimization Tips",desc:"Practical strategies to make your websites faster and more efficient for better user experience.",date:"Jan 02, 2025",link:"#"},
  {title:"Version Control Best Practices",desc:"Master Git workflows and collaboration techniques for better project management.",date:"Dec 28, 2024",link:"#"}
];

// Generate blog cards
document.getElementById("blogContainer").innerHTML=posts.map(p=>`
  <article class="blog-card">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="blog-meta">
      <span>${p.date}</span>
      <a href="${p.link}" class="read-more">Read More →</a>
    </div>
  </article>
`).join('');
