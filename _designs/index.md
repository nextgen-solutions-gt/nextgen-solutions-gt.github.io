---
layout: portfolio
title: Designs
permalink: /designs/
---
<h1>All phpBB Designs</h1>

<div class="design-grid">
  {% for design in site.data.designs %}
    <article class="design-card reveal">
      <img src="{{ design.image }}" alt="{{ design.name }}">
      <h3>{{ design.name }}</h3>
      <p>{{ design.description }}</p>
      <a href="/designs/{{ design.name | slugify }}/" class="btn">View Design</a>
    </article>
  {% endfor %}
</div>
