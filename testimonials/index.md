---
layout: default
title: Client Testimonials
seo_title: Client reviews & testimonials
description: Real feedback from forum owners and communities I’ve worked with.
---

{% assign all_testimonials = site.data.testimonials %}
{% assign hero_testimonial = all_testimonials | first %}
{% assign other_testimonials = all_testimonials | slice: 1, 100 %}

<!-- HERO -->
<section class="hero hero-testimonials">
  <div class="hero-inner container">

    <span class="hero-badge">
      nextgen's service
    </span>

    <h1 class="hero-title">
      Client testimonials
    </h1>

    <p class="hero-subtitle">
      Trusted by forum owners and communities worldwide
    </p>

    <!-- TESTIMONIO DESTACADO -->
    <article class="testimonial featured hero-testimonial">
      <p class="testimonial-text">
        “{{ hero_testimonial.text }}”
      </p>

      <div class="testimonial-footer">

        <!-- BADGE PLATAFORMA -->
        <span class="platform-badge platform-{{ hero_testimonial.platform | slugify }}">
          {{ hero_testimonial.platform }}
        </span>

        {% if hero_testimonial.rating %}
          <div class="testimonial-rating">
            <span class="stars">
              {% for i in (1..hero_testimonial.rating) %}
                <span aria-hidden="true">★</span>
              {% endfor %}
            </span>
            <span class="rating-value">
              {{ hero_testimonial.rating }}.0 / 5
            </span>
          </div>
        {% endif %}

        <div class="testimonial-meta">
          <strong class="testimonial-name">{{ hero_testimonial.name }}</strong>
          <span class="testimonial-role">
            {{ hero_testimonial.role }}
          </span>
        </div>

      </div>
    </article>

  </div>
</section>

<!-- GRID -->
<section class="testimonials container">
  <section class="testimonials-grid">

    {% for t in other_testimonials %}
      <article class="testimonial">

        <p class="testimonial-text">
          “{{ t.text }}”
        </p>

        <div class="testimonial-footer">

          <!-- BADGE PLATAFORMA -->
          <span class="platform-badge platform-{{ t.platform | slugify }}">
            {{ t.platform }}
          </span>

          {% if t.rating %}
            <div class="testimonial-rating">
              <span class="stars">
                {% for i in (1..t.rating) %}
                  <span aria-hidden="true">★</span>
                {% endfor %}
              </span>
              <span class="rating-value">
                {{ t.rating }}.0 / 5
              </span>
            </div>
          {% endif %}

          <div class="testimonial-meta">
            <strong class="testimonial-name">{{ t.name }}</strong>
            <span class="testimonial-role">
              {{ t.role }}
            </span>
          </div>

        </div>

      </article>
    {% endfor %}

  </section>
</section>
