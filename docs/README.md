# AIM workshop on web accessibility, 2018

Materials for a workshop. [github.com/pkra/aim-workshop-2018](https://github.com/pkra/aim-workshop-2018), [pens]()

## Potential lightning talks

The slides use RemarkJS which uses arrow keys for navigation but does not expose them fully accessibly; as a work around, you can use key-pass-through features of screenreaders (e.g., NVDA+F2, JAWS+3).

* [Deep labels with SRE and MathJax](./deeplabels)
  * initially done for MathJax
  * "sprinkling" aria-labels across MathJax SVG output to get fully explorable SVG (ie. no JS required)
* [a stroll through MathML]
  * limitations of MathML with web accessibility in mind
  * walk through elements and attributes (also things like the operator dictionary)
  * commonly found problems and heuristics
  * visual layout: no normative statements, often vague
  * semantic value of
* [Custom Elements for mathematical documents](./customelements)
  * quick introduction to custom elements
    * v0 vs v1, https://github.com/shawnbot/custom-elements#v1
    * naming
    * the real magic: registration, added behavior
  * examples for creating common elements of mathematical documents
    * theorem environments
    * cite, ref
      * counters
  * examples for advanced constructions
    * stretchy braces for non-equations
    * using tools, e.g., https://saeidzebardast.github.io/nvd3-elements/components/nvd3-elements/
