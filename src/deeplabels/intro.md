class: center, middle, inverse

# Deep ARIA labels with SRE and MathJax

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

* HTML5 allows (de-facto) 3 document types: HTML, SVG, MathML
* ARIA allows for enriching document structure
* Equation content contains visual layout information, not semantic information

???
* HTML and SVG are properly integrated
* ARIA in particular by specifying accessible on nodes
* Equation content often compressed, cryptic often extraneous visual hints

---

# What we're after

* Annotate MathJax output with ARIA labels/labelledby
* voicing
  * customizable/fixable
* exploration
  * navigate tree
  * possibly expose summaries and details

---

# What we'll use

* [MathJax](https://www.mathjax.org) for equation layout (i.e., visual)
* [speech-rule-engine](https://github.com/zorkow/speech-rule-engine) for semantic enrichment and speech text
* some more JS

???

* JS will be client-side but think of it as server-side


---

# What we'll do

* enrich input (via MathML) using SRE
  * adds a lot of information
* generate SVG or HTML using MathJax
  * preserves information
* create *deepest usable labels*

---



# Questions/Problems

* Which roles do we use?
  * group?
  * future: inline/block?
* How can we reduce AT noise?
  * presentation almost everywhere?
  * future: SVG  document mode?
* Can we get explorable summaries+detail
  * title/desc
* Can we get correct full-reading modes

???

* group works with VO desktop but "group" noise
* grid seems better on VO (not sure how I did that)
*
