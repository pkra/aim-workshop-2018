
const sre =   require('speech-rule-engine');;
const mj = require('mathjax-node').typeset;
sre.setupEngine({
domain: 'mathspeak',
style: 'brief',
locale: 'en',
speech: 'deep'
});

const main = async (input) => {
  let format = 'MathML'
  if (input.trim[0] !== '<') format = 'TeX';
  const mjout = await mj({
    math: input,
    format: format,
    mml: true
  });
  const enriched = sre.toEnriched(mjout.mml);
  // console.log(enriched.toString())
  const mmlpretty = sre.pprintXML(enriched.toString());
  // console.log(sre.pprintXML(enriched.toString()).replace(/ data-semantic-(.*?)data-semantic-speech/g,' data-semantic-speech'))
  const out = await mj({
    math: enriched,
    format: 'MathML',
    svg: true
  });
  console.log(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>output</title>
    </head>
    <body>
    ${out.svg}
    <script src="a11yify.js"></script>
    </body>
    </html>
    `
    // <div hidden>
    // ${mmlpretty}
    // </div>
    );
}

main(process.argv[2]);

// const mml = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
//   <mi>P</mi>
//   <mo stretchy="false">(</mo>
//   <mi>E</mi>
//   <mo stretchy="false">)</mo>
//   <mo>=</mo>
//   <mrow class="MJX-TeXAtom-ORD">
//     <mrow>
//       <mrow class="MJX-TeXAtom-OPEN">
//         <mo maxsize="2.047em" minsize="2.047em">(</mo>
//       </mrow>
//       <mfrac linethickness="0">
//         <mi>n</mi>
//         <mi>k</mi>
//       </mfrac>
//       <mrow class="MJX-TeXAtom-CLOSE">
//         <mo maxsize="2.047em" minsize="2.047em">)</mo>
//       </mrow>
//     </mrow>
//   </mrow>
//   <msup>
//     <mi>p</mi>
//     <mi>k</mi>
//   </msup>
//   <mo stretchy="false">(</mo>
//   <mn>1</mn>
//   <mo>&#x2212;<!-- − --></mo>
//   <mi>p</mi>
//   <msup>
//     <mo stretchy="false">)</mo>
//     <mrow class="MJX-TeXAtom-ORD">
//       <mi>n</mi>
//       <mo>&#x2212;<!-- − --></mo>
//       <mi>k</mi>
//     </mrow>
//   </msup>
// </math>
// `
