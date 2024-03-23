/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = new Map();

    for(let item of this.words.length){
      let word = this.words[item];
      let nextWord = this.words[item + 1]

      if(chain.has(word)){
        chain.get(word).push(nextWord);
      } else {
        chain.set(word, [nextWord]);
      }
      this.chain = chain;
    }
    choice = arr[Math.floor(Math.random() * arr.length)]
    return choice;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(this.chain.keys())
    let key = MarkovMachine.choice(keys);
    let out = [];

    while(out.length < numWords && key !== null){
      out.push(key);
      key = MarkovMachine.chocie(this.chain.get(key));
    }
    return out.join(' ');
  }
}

module.exports = {
  MarkovMachine
};