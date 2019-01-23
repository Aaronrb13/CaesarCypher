function cypher(x, y, z) {
  let answer = "";
  if (x === "E" || x === "e") {
    console.log(z);

    for (let i = 0; i < z.length; i++) {
      console.log(i, z[i], z[i].charCodeAt(0));
      let dec = z[i].charCodeAt(0) + y;
      console.log(dec);
      let pop = String.fromCharCode(dec);
      console.log(pop);
      answer += pop;
    }
    return "the answer is " + answer;
  } else {
    for (let i = 0; i < z.length; i++) {
      console.log(i, z[i], z[i].charCodeAt(0));
      let dec = z[i].charCodeAt(0) - y;
      console.log(dec);
      let pop = String.fromCharCode(dec);
      console.log(pop);
      answer += pop;
    }
    return "the answer is " + answer;
  }
}
console.log(cypher("d", 4, "Xli$RWE${mpp$riziv$jmkyvi$xlmw$sri$syx%"));

//console.log(cypher("e", 4, "The NSA will never figure this one out!"));
