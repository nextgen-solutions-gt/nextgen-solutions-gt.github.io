---
layout: portfolio
title: phpBB
permalink: /categories/phpbb/
category: phpbb
---
<h1>phpBB Designs</h1>

<div class="design-grid">
  {% assign filtered = site.data.designs | where_exp:"item", "item.categories contains page.category" %}
  {% for design in filtered %}
    <article class="design-card reveal">
      <img src="{{ design.image }}" alt="{{ design.name }}">
      <h3>{{ design.name }}</h3>
      <p>{{ design.description }}</p>
      <a href="/designs/{{ design.name | slugify }}/" class="btn">View Design</a>
    </article>
  {% endfor %}
</div>

{% if filtered.size == 0 %}
  <p>No designs found for this category.</p>
{% endif %}
