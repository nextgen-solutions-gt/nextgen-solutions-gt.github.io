---
layout: project
permalink: /projects/:slug
---

{% assign page.project = site.data.projects | where: "slug", page.slug | first %}
