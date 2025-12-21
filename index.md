---
layout: default
title: nextgen solutions
---

<section id="home" class="hero container">
  <!-- hero -->
</section>

<section id="services" class="services container">
<div class="card reveal">
  <i class="fa-solid fa-download"></i>
  <h3 data-i18n="install"></h3>
  <p data-i18n="installDesc"></p>
</div>

<div class="card reveal">
  <i class="fa-solid fa-arrows-rotate"></i>
  <h3 data-i18n="update"></h3>
  <p data-i18n="updateDesc"></p>
</div>

<div class="card reveal">
  <i class="fa-solid fa-screwdriver-wrench"></i>
  <h3 data-i18n="maintenance"></h3>
  <p data-i18n="maintenanceDesc"></p>
</div>

<div class="card reveal">
  <i class="fa-solid fa-palette"></i>
  <h3 data-i18n="designs"></h3>
  <p data-i18n="designsDesc"></p>
</div>
</section>

<section id="designs" class="designs container">
  <h2 class="section-title">Diseños phpBB</h2>

  <div class="design-grid">
    {% for design in site.data.designs %}
      <article class="design-card reveal">
        <img src="{{ design.image }}" alt="Preview {{ design.name }}">
        
        <h3>{{ design.name }}</h3>
        <p>{{ design.description }}</p>

        <a href="{{ design.repo }}" target="_blank" class="btn">
          Ver repositorio
        </a>
      </article>
    {% endfor %}
  </div>
</section>

<section id="portfolio" class="portfolio container">
  <!-- portafolio -->
</section>

<section id="contact" class="contact container">
  <!-- contacto -->
</section>
