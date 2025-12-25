---
layout: default
title: Blog
permalink: /blog/
---

<section class="blog container">

  <h1 class="section-title">Blog</h1>

  <div class="blog-list">
    {% for post in site.posts %}
      <article class="blog-card">
        <h2>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h2>

        <div class="blog-meta">
          {{ post.date | date: "%B %d, %Y" }}
        </div>

        {% if post.description %}
          <p>{{ post.description }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>

</section>
