---
layout: default
title: Servicios profesionales para phpBB
---

<section class="hero reveal">
## Especialistas en phpBB

Instalación, actualización, mantenimiento y diseño profesional para comunidades phpBB.
</section>

<section id="services">
## Servicios

{% for service in site.data.services %}
<div class="card reveal">
<i class="fa-solid {{ service.icon }}"></i>
<h3>{{ service.title }}</h3>
<p>{{ service.description }}</p>
</div>
{% endfor %}
</section>

<section id="designs">
## Diseños phpBB

{% for design in site.data.designs %}
<div class="card reveal">
<img src="{{ design.preview }}" alt="Preview {{ design.name }}">
<h3>{{ design.name }}</h3>
<p>{{ design.description }}</p>
<a href="{{ design.repo }}" target="_blank">Repositorio</a>
</div>
{% endfor %}
</section>
