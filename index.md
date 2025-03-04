---
layout: default
title: "Jon Brim"
---
{% include navigation.html type="fixed" %}
<main class="home section" >
  <div id="about-me" class="page page_static">
    <h1 class="page_title sticky_trigger">
      Jon Brim
    </h1>
    <span class="page_sub-title" >
      UI/UX Designer
    </span>
    <p>
      Hi I'm Jon. I'm experienced in creating impactful visual products in a variety of media, platforms, and devices. I love collaborating with product and development teams to design and iterate new features, explore innovative technologies, tackle challenging problems, and provide the best possible experience to users.
    </p>
    <ul class="social_list">
      {% if site.linkedin %}
      <a href="{{ site.linkedin | prepend: 'https://www.linkedin.com/in/' }}" rel="external" target="blank" class="social_item"><li class="social_item_content"><span class="icon"><svg><use href="#icon_linkedin" /></svg></span> Linkedin</li></a>
      {% endif %}
      {% if site.resume %}
      <a href="{{ site.resume }}" target="blank" class="social_item"><li class="social_item_content"><span class="icon"><svg><use href="#icon_resume" /></svg></span> Resume</li></a>
      {% endif %}
      {% if site.email %}
      <a href="{{ site.email | prepend: 'mailto:' }}" class="social_item"><li class="social_item_content"><span class="icon"><svg><use href="#icon_mail" /></svg></span>{{ site.email }}</li></a>
      {% endif %}
      {% if site.phone %}
      <a href="{{ site.phone | prepend: 'tel:+1' | remove: '(' | remove: ')' | remove: '-' | remove: ' ' }}" class="social_item"><li class="social_item_content"><span class="icon"><svg><use href="#icon_phone" /></svg></span> {{ site.phone }}</li></a>
      {% endif %}
    </ul>
  </div>
  {%- if site.project.size > 0 -%}
      {%- for page in site.project -%}
          <a 
            id="{{ page.title | replace: ' ', '-' | downcase }}" 
            class="page page_link" 
            href="{{ page.url | relative_url }}" 
            {% if page.thumbnail_background-color %} 
              style="background-color:{{ page.thumbnail_background-color }}"
            {% endif %}
          >
            <img 
              src="{{ page.thumbnail }}"
              class="thumbnail"
              width="500px"
              height="300px"
              alt="{{ page.title }}"
            >
            <div class="scrim">
              <h4 class="title">{{ page.title }}</h4>
              <span class="sub-title">{{ page.sub-title }}</span>
            </div>
          </a>
      {%- endfor -%}
  {%- endif -%}
</main>
<section id="clients" class="clients">
  <h2>
    Clients I've worked for
  </h2>
  <article>
    {% for clients in site.data.clients %}
      {% for client in clients.client %}
        <figure id="client-{{client.name | replace: ' ', '-' | downcase }}" aria-label="{{client.name}}">
          <img src="{{ clients.folder }}{{ client.logo }}" alt="{{client.name}}">
        </figure>
      {% endfor %}  
      
    {% endfor %}  
  </article>
</section>
{% include icons.html %}