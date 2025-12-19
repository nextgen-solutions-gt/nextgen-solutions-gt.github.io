---
layout: default
title: Diseños phpBB
---

<h1>Diseños profesionales para phpBB</h1>
<p>Estilos modernos, accesibles y optimizados para comunidades reales.</p>

<div class="grid">
{% for p in site.data.projects %}
  <a class="card" href="/projects/{{ p.slug }}/">
    <img src="{{ p.preview }}" alt="Preview del estilo {{ p.name }}">
    <h3>{{ p.name }}</h3>
    <p>{{ p.description }}</p>

    <ul class="tags">
      {% for tag in p.tags %}
        <li>{{ tag }}</li>
      {% endfor %}
    </ul>
  </a>
{% endfor %}
</div>
