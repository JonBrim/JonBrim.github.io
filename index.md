---
layout: default
title: "Portfolio"
---
<main class="home section" >
  {%- if site.posts.size > 0 -%}
      {%- for post in site.posts -%}
          <a class="post post_link" href="{{ post.url | relative_url }}" {% if post.thumbnail_background-color %} style="background-color:{{ post.thumbnail_background-color }}"{% endif %}>
            <img 
              src="{{ post.thumbnail }}"
              class="thumbnail"
              width="500px"
              height="300px"
              alt="{{ post.title }}"
            >
            <div class="scrim">
              <h4 class="title">{{ post.title }}</h4>
              <span class="sub-title">{{ post.sub-title }}</span>
            </div>
          </a>
      {%- endfor -%}
  {%- endif -%}
</main>
<header class="section" >
  <div class="post post_static">
    <h1 class="post_title">
      Jon Brim
    </h1>
    <span class="post_sub-title" >
      UI/UX Designer
    </span>
    <p>
      Hi I'm Jon. I'm experienced in creating impactful visual products in a variety of media, platforms, and devices. I love collaborating with product and development teams to design and iterate new features, explore innovative technologies, tackle challenging problems, and provide the best possible experience to users.
    </p>
  </div>
</header>
<section class="clients">
  <h2>
    Clients I've worked for
  </h2>
  <article>
    {% for clients in site.data.clients %}
      {% for client in clients.client %}
        <figure aria-label="{{client.name}}">
          <img src="{{ clients.folder }}{{ client.logo }}" alt="{{client.name}}">
        </figure>
      {% endfor %}  
    {% endfor %}  
  </article>
</section>
