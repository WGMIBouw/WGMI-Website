function getProjectBySlug(slug){return (window.WGMI_PROJECTS||[]).find(p=>p.slug===slug);}
function renderProjectGrid(){const el=document.getElementById('projects-grid'); if(!el) return; el.innerHTML=(window.WGMI_PROJECTS||[]).map(p=>`
  <article class="project-card">
    <a href="project.html?slug=${p.slug}" class="project-link">
      <img src="${p.cover}" alt="${p.title}" class="project-card-image">
      <div class="project-card-body">
        <p class="project-location">${p.location}</p>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <span class="text-link">Bekijk project</span>
      </div>
    </a>
  </article>`).join('');}
function renderFeaturedProjects(){const el=document.getElementById('featured-projects'); if(!el) return; const list=(window.WGMI_PROJECTS||[]).filter(p=>p.featured); el.innerHTML=list.map((p,i)=>`
  <article class="feature-project ${i%2?'reverse':''}">
    <img src="${p.cover}" alt="${p.title}" class="feature-project-image">
    <div class="project-copy">
      <p class="project-label">Project ${String(i+1).padStart(2,'0')}</p>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <a href="project.html?slug=${p.slug}" class="text-link">Bekijk project</a>
    </div>
  </article>`).join('');}
function renderSingleProject(){const title=document.getElementById('project-title'); if(!title) return; const slug=new URLSearchParams(location.search).get('slug'); const p=getProjectBySlug(slug); if(!p){title.textContent='Project niet gevonden'; return;} document.title=`${p.title} | WGMI Bouw`; document.getElementById('project-eyebrow').textContent=`Project — ${p.location}`; title.textContent=p.title; document.getElementById('project-summary').textContent=p.summary; document.getElementById('project-content').innerHTML=p.description.map(x=>`<p>${x}</p>`).join(''); document.getElementById('project-gallery').innerHTML=p.images.map(src=>`<img src="${src}" alt="${p.title}" class="gallery-image">`).join('');}
document.addEventListener('DOMContentLoaded',()=>{renderFeaturedProjects(); renderProjectGrid(); renderSingleProject(); const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();});