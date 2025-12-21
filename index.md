---
layout: default
title: nextgen solutions
---

<section id="home" class="hero">
  <div class="container">
    <span class="hero-badge">
      phpBB specialists
    </span>

    <h1>
      Installation, maintenance, and
      <span class="highlight">professional designs</span>
      para phpBB
    </h1>

    <p class="hero-text">
      We help communities grow with fast, secure, and visually appealing phpBB forums.
      Secure and visually appealing.
    </p>

    <div class="hero-actions">
      <a href="#contact" class="btn primary">
        Contact me
      </a>
      <a href="#designs" class="btn secondary">
        See designs
      </a>
    </div>
  </div>
</section>


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
  <h2 class="section-title">phpBB Designs</h2>

  <div class="design-grid">
    {% for design in site.data.designs %}
      <article class="design-card reveal">
        <img src="{{ design.image }}" alt="Preview {{ design.name }}">
        
        <h3>{{ design.name }}</h3>
        <p>{{ design.description }}</p>

        <a href="{{ design.repo }}" target="_blank" class="btn">
          View repository
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
