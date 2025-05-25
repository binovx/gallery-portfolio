  // Data Portfolio
  const portfolioData = {
    profile: {
      name: &quot;Bintang ID&quot;,
      role: &quot;UI/UX Designer &amp; Frontend Developer&quot;,
      image: &quot;https://randomuser.me/api/portraits/men/32.jpg &quot;,
      stats: { projects: 47, experience: 8, clients: 32 },
      social: [
        { icon: &quot;github&quot;, url: &quot;#&quot; },
        { icon: &quot;dribbble&quot;, url: &quot;#&quot; },
        { icon: &quot;behance&quot;, url: &quot;#&quot; },
        { icon: &quot;linkedin-in&quot;, url: &quot;#&quot; }
      ]
    },
    projects: [
      {
        id: 1,
        title: &quot;E-commerce Dashboard&quot;,
        category: &quot;ui&quot;,
        year: &quot;2023&quot;,
        description: &quot;A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and customer insights.&quot;,
        client: &quot;ShopMaster Inc.&quot;,
        license: &quot;Proprietary&quot;,
        tools: &quot;Figma, Illustrator, After Effects&quot;,
        date: &quot;March 2023&quot;,
        image: &quot;https://source.unsplash.com/random/600x400/?dashboard ,ui&quot;,
        liveUrl: &quot;https://example.com/ecommerce-demo &quot;,
        codeUrl: &quot;https://github.com/username/ecommerce-dashboard &quot;
      },
      {
        id: 2,
        title: &quot;Portfolio Website&quot;,
        category: &quot;web&quot;,
        year: &quot;2023&quot;,
        description: &quot;A responsive portfolio website built with modern web technologies to showcase creative work.&quot;,
        client: &quot;Freelance Project&quot;,
        license: &quot;MIT&quot;,
        tools: &quot;HTML, CSS, JavaScript, Tailwind&quot;,
        date: &quot;January 2023&quot;,
        image: &quot;https://source.unsplash.com/random/600x400/?portfolio ,website&quot;,
        liveUrl: &quot;https://example.com/portfolio-demo &quot;,
        codeUrl: &quot;https://github.com/username/portfolio-template &quot;
      },
      {
        id: 3,
        title: &quot;Fitness Mobile App&quot;,
        category: &quot;mobile&quot;,
        year: &quot;2022&quot;,
        description: &quot;A mobile application for fitness tracking with personalized workout plans and nutrition guides.&quot;,
        client: &quot;FitLife Solutions&quot;,
        license: &quot;Proprietary&quot;,
        tools: &quot;React Native, Firebase, Figma&quot;,
        date: &quot;November 2022&quot;,
        image: &quot;https://source.unsplash.com/random/600x400/?fitness ,app&quot;,
        liveUrl: &quot;https://example.com/fitness-app &quot;,
        codeUrl: &quot;https://github.com/username/fitness-app &quot;
      }
    ],
    categories: [
      { id: &quot;all&quot;, name: &quot;All Projects&quot; },
      { id: &quot;ui&quot;, name: &quot;UI/UX Design&quot; },
      { id: &quot;web&quot;, name: &quot;Web Development&quot; },
      { id: &quot;mobile&quot;, name: &quot;Mobile Apps&quot; },
      { id: &quot;branding&quot;, name: &quot;Branding&quot; },
      { id: &quot;videography&quot;, name: &quot;Videography&quot; }
    ]
  };

  class PortfolioApp {
    constructor() {
      this.visibleProjects = 3;
      this.activeTab = &#39;all&#39;;
      this.initElements();
      this.renderProfile();
      this.renderTabs();
      this.renderProjects();
      this.initEventListeners();
    }

    initElements() {
      this.elements = {
        profileContainer: document.querySelector(&#39;#profile&#39;),
        tabsContainer: document.getElementById(&#39;tabs-container&#39;),
        projectsContainer: document.getElementById(&#39;projects-container&#39;),
        loadMoreBtn: document.getElementById(&#39;load-more&#39;),
        modal: document.getElementById(&#39;project-modal&#39;),
        closeModalBtn: document.getElementById(&#39;close-modal&#39;),
        modalTitle: document.getElementById(&#39;modal-title&#39;),
        modalCategory: document.getElementById(&#39;modal-category&#39;),
        modalYear: document.getElementById(&#39;modal-year&#39;),
        modalDescription: document.getElementById(&#39;modal-description&#39;),
        modalClient: document.getElementById(&#39;modal-client&#39;),
        modalLicense: document.getElementById(&#39;modal-license&#39;),
        modalTools: document.getElementById(&#39;modal-tools&#39;),
        modalDate: document.getElementById(&#39;modal-date&#39;),
        modalImage: document.getElementById(&#39;modal-image&#39;),
        modalActions: document.getElementById(&#39;modal-actions&#39;)
      };
    }

    renderProfile() {
      const { profile } = portfolioData;
      this.elements.profileContainer.innerHTML = `
        <div class='flex flex-col items-center gap-4'>
          <div class='relative group'>
            <img alt='Profile' class='w-24 h-24 rounded-full border-2 border-primary-500 object-cover shadow-lg' src='${profile.image}'/>
            <div class='absolute -bottom-2 -right-2'>
              <span class='bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 badge'>
                <i class='fas fa-badge-check text-xs'/>
                <span>PRO</span>
              </span>
            </div>
          </div>
          <div class='text-center'>
            <h1 class='text-2xl font-bold text-white'>${profile.name}</h1>
            <p class='text-dark-400 mt-1'>${profile.role}</p>
            <div class='flex gap-3 mt-3 justify-center'>
              ${profile.social.map(social =&gt; `
                <a class='text-dark-400 hover:text-primary-500 transition-colors' href='${social.url}'>
                  <i class='fab fa-${social.icon} text-lg'/>
                </a>
              `).join(&#39;&#39;)}
            </div>
          </div>
        </div>
        <div class='grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl mt-6'>
          <div class='bg-dark-800 p-4 rounded-lg text-center border border-dark-700 hover:border-primary-500 transition-colors'>
            <div class='text-2xl font-bold text-white'>${profile.stats.projects}+</div>
            <div class='text-xs text-dark-400'>Projects</div>
          </div>
          <div class='bg-dark-800 p-4 rounded-lg text-center border border-dark-700 hover:border-primary-500 transition-colors'>
            <div class='text-2xl font-bold text-white'>${profile.stats.experience}</div>
            <div class='text-xs text-dark-400'>Years Exp.</div>
          </div>
          <div class='bg-dark-800 p-4 rounded-lg text-center border border-dark-700 hover:border-primary-500 transition-colors hidden sm:block'>
            <div class='text-2xl font-bold text-white'>${profile.stats.clients}</div>
            <div class='text-xs text-dark-400'>Clients</div>
          </div>
        </div>
      `;
    }

    renderTabs() {
      const container = this.elements.tabsContainer;
      if (!container) return;
      container.innerHTML = &#39;&#39;;
      portfolioData.categories.forEach(category =&gt; {
        const button = document.createElement(&#39;button&#39;);
        button.className = `tab-button px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${
          this.activeTab === category.id ? &#39;bg-primary-500 text-white&#39; : &#39;hover:bg-dark-700 text-dark-300&#39;
        }`;
        button.dataset.tab = category.id;
        button.textContent = category.name;
        container.appendChild(button);
      });
    }

    getFilteredProjects() {
      if (this.activeTab === &#39;all&#39;) return portfolioData.projects;
      return portfolioData.projects.filter(project =&gt; project.category === this.activeTab);
    }

    renderProjects() {
      const filtered = this.getFilteredProjects();
      const toShow = filtered.slice(0, this.visibleProjects);

      this.elements.projectsContainer.innerHTML = &#39;&#39;;
      if (toShow.length === 0) {
        this.elements.projectsContainer.innerHTML = `
          <div class='col-span-full text-center py-12'>
            <i class='fas fa-folder-open text-4xl text-dark-500 mb-4'/>
            <h3 class='text-xl font-medium text-white mb-2'>No projects found</h3>
            <p class='text-dark-400'>We couldn&#39;t find any projects in this category.</p>
          </div>`;
        this.elements.loadMoreBtn.classList.add(&#39;hidden&#39;);
        return;
      }

      toShow.forEach(project =&gt; {
        const el = document.createElement(&#39;div&#39;);
        el.className = &#39;project-card group relative overflow-hidden rounded-xl border border-dark-700 hover:border-primary-500 transition-all duration-300 hover:shadow-lg&#39;;
        el.innerHTML = `
          <div class='overflow-hidden rounded-t-xl'>
            <img alt='${project.title}' class='project-image w-full h-40 object-cover transition-transform duration-500' src='${project.image}'/>
          </div>
          <div class='p-4 bg-dark-800'>
            <div class='flex justify-between items-start'>
              <h3 class='text-base font-semibold text-white truncate'>${project.title}</h3>
              <span class='text-xs bg-dark-700 text-primary-500 px-2 py-1 rounded uppercase'>${project.category}</span>
            </div>
            <p class='text-dark-400 text-sm mt-2 line-clamp-2'>${project.description}</p>
            <div class='mt-4 flex justify-between items-center'>
              <span class='text-xs text-dark-500'>${project.date}</span>
              <div class='flex gap-2'>
                ${project.liveUrl ? `<a class='px-2 py-1 text-xs bg-dark-700 hover:bg-primary-500 text-white rounded transition-colors' href='${project.liveUrl}' target='_blank'><i class='fas fa-external-link-alt text-xs'/></a>` : &#39;&#39;}
                <button class='view-project px-3 py-1 text-xs bg-dark-700 hover:bg-primary-500 text-white rounded transition-colors' data-id='${project.id}'>Details</button>
              </div>
            </div>
          </div>`;
        this.elements.projectsContainer.appendChild(el);
      });

      if (filtered.length &gt; this.visibleProjects) {
        this.elements.loadMoreBtn.classList.remove(&#39;hidden&#39;);
      } else {
        this.elements.loadMoreBtn.classList.add(&#39;hidden&#39;);
      }
    }

    openProjectModal(id) {
      const project = portfolioData.projects.find(p =&gt; p.id === id);
      if (!project) return;

      this.elements.modalTitle.textContent = project.title;
      this.elements.modalCategory.textContent = project.category.toUpperCase();
      this.elements.modalYear.textContent = project.year;
      this.elements.modalDescription.textContent = project.description;
      this.elements.modalClient.textContent = project.client;
      this.elements.modalLicense.textContent = project.license;
      this.elements.modalTools.textContent = project.tools;
      this.elements.modalDate.textContent = project.date;
      this.elements.modalImage.src = project.image;
      this.elements.modalImage.alt = project.title;

      this.elements.modalActions.innerHTML = `
        ${project.liveUrl ? `<a class='px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center gap-2' href='${project.liveUrl}' target='_blank'><i class='fas fa-external-link-alt'/><span>Live Preview</span></a>` : &#39;&#39;}
        ${project.codeUrl ? `<a class='px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors flex items-center gap-2' href='${project.codeUrl}' target='_blank'><i class='fab fa-github'/><span>View Code</span></a>` : &#39;&#39;}
      `;

      this.elements.modal.classList.remove(&#39;hidden&#39;);
    }

    initEventListeners() {
      document.addEventListener(&#39;click&#39;, (e) =&gt; {
        const btn = e.target.closest(&#39;.tab-button&#39;);
        if (btn) {
          this.activeTab = btn.dataset.tab;
          this.visibleProjects = 3;
          this.renderTabs();
          this.renderProjects();
        }
      });

      this.elements.loadMoreBtn.addEventListener(&#39;click&#39;, () =&gt; {
        this.visibleProjects += 3;
        this.renderProjects();
      });

      this.elements.closeModalBtn.addEventListener(&#39;click&#39;, () =&gt; {
        this.elements.modal.classList.add(&#39;hidden&#39;);
      });

      this.elements.modal.addEventListener(&#39;click&#39;, (e) =&gt; {
        if (e.target === this.elements.modal) {
          this.elements.modal.classList.add(&#39;hidden&#39;);
        }
      });

      document.addEventListener(&#39;click&#39;, (e) =&gt; {
        const viewBtn = e.target.closest(&#39;.view-project&#39;);
        if (viewBtn) {
          const id = parseInt(viewBtn.dataset.id);
          this.openProjectModal(id);
        }
      });
    }
  }

  document.addEventListener(&#39;DOMContentLoaded&#39;, () =&gt; {
    new PortfolioApp();
  });
