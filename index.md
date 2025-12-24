---
layout: default
title: nextgen solutions
seo_title: phpBB Services & Premium Designs
description: Professional phpBB services, custom development and premium designs.
schema: home
hero: home
---

<section id="services" class="services container">
<div class="card reveal">
  <i class="fa-solid fa-download"></i>
  <h3>phpBB Installation</h3>
  <p>Professional installation and initial configuration.</p>
</div>

<div class="card reveal">
  <i class="fa-solid fa-arrows-rotate"></i>
  <h3>phpBB Update</h3>
  <p>We update your forum safely without data loss.</p>
</div>

<div class="card reveal">
  <i class="fa-solid fa-screwdriver-wrench"></i>
  <h3>Maintenance</h3>
  <p>Security, performance and continuous support.</p>
</div>

<div class="card reveal">
  <i class="fa-solid fa-palette"></i>
  <h3>phpBB Designs</h3>
  <p>Modern, responsive and custom phpBB styles.</p>
</div>
</section>

<section id="designs" class="designs container">
{% assign all_tags = "" | split: "" %}
{% for design in site.designs %}
  {% for tag in design.tags %}
    {% unless all_tags contains tag %}
      {% assign all_tags = all_tags | push: tag %}
    {% endunless %}
  {% endfor %}
{% endfor %}

<div class="design-filters">
  <button class="filter-btn active" data-filter="all">
    All
  </button>

  {% for tag in all_tags %}
    <button class="filter-btn" data-filter="{{ tag | slugify }}">
      {{ tag }}
    </button>
  {% endfor %}
</div>
  <h2 class="section-title">phpBB Designs</h2>

  <div class="design-grid">
    {% for design in site.designs %}
      <article class="design-card reveal" data-tags="{% for tag in design.tags %}{{ tag | slugify }} {% endfor %}">
	<div class="design-image">
		<img src="{{ design.image }}" alt="Preview {{ design.title }}">
	</div>

        <h3>{{ design.title }}</h3>
<div class="design-tags">
  {% for tag in design.tags %}
    <span class="tag tag-{{ tag | slugify }}" aria-label="Tag {{ tag }}">
      {{ tag }}
    </span>
  {% endfor %}
</div>
		
        <p>{{ design.description }}</p>

        <a href="{{ design.url }}" class="btn">
          View details
        </a>
      </article>
    {% endfor %}
  </div>
</section>

<section id="portfolio" class="portfolio container">
  <div class="section-head">
    <h2 class="section-title">Portfolio</h2>
    <p class="section-subtitle">
      Selected projects and real work for communities and forums
    </p>
  </div>

  <div class="portfolio-grid">
    {% for project in site.data.portfolio %}
      <article class="portfolio-card reveal">
        <div class="portfolio-image">
          <img src="{{ project.image }}" alt="{{ project.name }}">
        </div>

        <div class="portfolio-body">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>

          {% if project.link %}
            <a href="{{ project.link }}" target="_blank" class="btn small">
              View project
            </a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>


<section id="contact" class="contact container">
  <h2 class="section-title">Contact Me</h2>

  <p class="contact-text">
    Interested in working together or need help with phpBB?
    You can reach me through any of the following platforms.
  </p>
<div class="contact-cta reveal">
  <a href="/custom-work/" class="btn primary large">
    Request custom work
  </a>
</div>

  <div class="contact-socials reveal">
    <a href="https://github.com/yourusername" target="_blank" class="social github">
      <i class="fa-brands fa-github"></i>
      GitHub
    </a>

    <a href="https://discord.com/users/YOUR_ID" target="_blank" class="social discord">
      <i class="fa-brands fa-discord"></i>
      Discord
    </a>

    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" class="social linkedin">
      <i class="fa-brands fa-linkedin"></i>
      LinkedIn
    </a>

    <a href="mailto:contact@yourdomain.com" class="social email">
      <i class="fa-solid fa-envelope"></i>
      Email
    </a>
  </div>
</section>


