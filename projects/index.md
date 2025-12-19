---
layout: default
title: Projects
---

<h1>Diseños profesionales para phpBB</h1>

<div class="grid">
{% for p in site.data.projects %}
  <a class="card" href="/projects/{{ p.slug }}">
    <img src="{{ p.preview }}" alt="{{ p.name }}">
    <h3>{{ p.name }}</h3>
    <p>{{ p.description }}</p>
  </a>
{% endfor %}
</div>
