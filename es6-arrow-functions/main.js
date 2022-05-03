const $jokeContainer = document.querySelector('#joke-container');
const $flashImage = document.querySelector('#flash-image');
const $jokeForm = document.querySelector('#joke-form');

const jokester = {
  tellJoke: function (setup, punchline) {
    $jokeForm.classList.add('d-none');
    const $introStatement = this.renderJokePhrase('Hey Flash...');
    this.appendJokePhrase($introStatement);

    const self = this;
    setTimeout(() => {
      const $jokeSetup = self.renderJokePhrase(setup);
      self.appendJokePhrase($jokeSetup);
      setTimeout(() => {
        const $jokePunchline = self.renderJokePhrase(punchline);
        self.appendJokePhrase($jokePunchline);
        flash.laugh();
      }, 2000);
    }, 2000);
  },
  renderJokePhrase: phrase => {
    const $phrase = document.createElement('h4');
    $phrase.textContent = phrase;
    $phrase.className = 'fade-in text-center';
    return $phrase;
  },
  appendJokePhrase: $phrase => {
    $jokeContainer.append($phrase);
  }
};

const flash = {
  laughingUrl: 'images/flash-laugh.gif',
  laugh: function () {
    const self = this;
    setTimeout(() => {
      $flashImage.setAttribute('src', self.laughingUrl);
    }, 3000);
  }
};

function handleJokeSubmission(event) {
  event.preventDefault();
  const { setup, punchline } = event.target.elements;
  jokester.tellJoke(setup.value, punchline.value);
}

$jokeForm.addEventListener('submit', handleJokeSubmission);
