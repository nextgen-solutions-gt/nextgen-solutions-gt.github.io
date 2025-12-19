---
layout: default
title: Diseños
---

# Diseños profesionales para phpBB

<div class="grid">
{% for p in site.data.projects %}
  <a class="card" href="/projects/{{ p.slug }}/">
    <img src="{{ p.preview }}" alt="{{ p.name }}">
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
