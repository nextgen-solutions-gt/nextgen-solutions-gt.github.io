---
layout: default
title: Extensions
permalink: /extensions/
---

<section class="container">
  <h1>Extensions</h1>

  <div class="design-grid">
    {% for ext in site.extensions %}
      <article class="design-card">
        <h3>{{ ext.title }}</h3>
        <p>{{ ext.description }}</p>
        <a href="{{ ext.url }}" class="btn outline">View</a>
      </article>
    {% endfor %}
  </div>
</section>
