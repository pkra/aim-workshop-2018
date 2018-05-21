class: center, middle, inverse

# Custom Elements for mathematical documents

AIM workshop 2018

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---

# Introduction


"All Things Math On the Web"

* mathematician by training
* 2012-2017 MathJax Manager ([mathjax.org](https://www.mathjax.org))
* Independent consultant since 2014
* co-chair [W3C Math On Webpages Community Group](https://w3c.github.io/mathonwebpages/)
* Primary focus: STEM publishing workflows and architecture for web and eboook production

<small>

[krautzource.com](https://www.krautzource.com/) | [peterkrautzberger.org](https://www.peterkrautzberger.org/)

[@pkrautz](https://twitter.com/pkrautz) |  [github.com/pkra](https://github.com/pkra) | [@pkra@mathstodon.xyz](https://mathstodon.xyz/@pkra) | [LinkedIn](https://www.linkedin.com/in/peter-krautzberger-6a54a445)

</small>


---

# Equations ≠ Math

<img style="width: auto; max-width:95%; height: auto; max-height:30vh" width="658.01306" height="420.36343" src="./img/eqn-math-diagram.svg" alt="venn diagram: mathematics and equations with an intersection but neither encompassing the other">

???
* words are important
* math is not equations
* neither includes the other
* equations are layout but also beyond math
* I do mostly math, so title is fitting
* still most of this talk will be about equations
* equations are layout

---

# Background

* HTML5 introduced custom elements
  * custom tag names
  * custom behavior
  * custom scope

???
* v0 vs v1

---

# What we're after

* HTML-first authoring
* appealing to mathematical authors
* customizable
* shippable

???

* not markdown (but)
* not XML (but)
* not print (but)


---

# What we'll use

* A text editor
* A modern browser (and polyfills)
* HTML, CSS, JS

???

* text editor: good ol' TeX-like experience
* browser: ships anywhere, gives you "live preview"

---

# What we'll do

* Content: HTML
* style: CSS
* JS: custom behavior
  * regstration
  * connectedCallback

???

---

# Simple Examples

* theorem environments
```
class statement extends HTMLElement {
  connectedCallback(name = 'Statement') {
    this.setAttribute('role','landmark');
    const heading = document.createElement('b');
    heading.innerHTML = name;
    this.insertBefore(heading, this.firstChild);
    var style = document.createElement('style');
    style.textContent = 'statement- { display: block; }';
    this.appendChild(style);
  }
}
customElements.define('statement-', statement);
```
* ref
* cite

???

---

# Advanced Examples

* "braced content": [arxiv 1412.8106](https://arxiv.org/abs/1412.8106)
* "data visualization": [nvd3](https://saeidzebardast.github.io/nvd3-elements/components/nvd3-elements/)

???

---

# Questions/Problems

* Improve convenience
* Build communities
* Improve shipping

???

* markdown everywhere
* npm/unpkg, rawgit might be too hard
