import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

const Container = styled.main`
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  padding: 0.75rem;

  h1 {
    text-align: center;
  }
`;

export default function About() {
  return (
    <Container>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="aria-container" tabIndex="0" role="textbox">
        <p>Cat ipsum dolor sit amet, Lick left leg for ninety minutes, still dirty. Cccccaaaaaaaattttttttttsssssssss you are a captive audience while sitting on the toilet, pet me for eat half my food and ask for more sit in a box for hours. Grab pompom in mouth and put in water dish stare at imaginary bug yet purrrrrr but morning beauty routine of licking self chew the plant vommit food and eat it again yet climb leg. Lounge in doorway nya nya nyan lick butt and make a weird face yet cat not kitten around climb a tree, wait for a fireman jump to fireman then scratch his face, but reward the chosen human with a slow blink then cats take over the world. Morning beauty routine of licking self. Demand to have some of whatever the human is cooking, then sniff the offering and walk away i show my fluffy belly but it's a trap! if you pet it i will tear up your hand.</p>
        <p>Spit up on light gray carpet instead of adjacent linoleum meow meow scratch the furniture, but the cat was chasing the mouse. Poop in the plant pot. In the middle of the night i crawl onto your chest and purr gently to help you sleep claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Slap owner's face at 5am until human fills food dish meow all night, so rub against owner because nose is wet yet curl into a furry donut. Good now the other hand, too meow meow mama or kitty time and where is my slave? I'm getting hungry sit and stare yet kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment. Loved it, hated it, loved it, hated it. I show my fluffy belly but it's a trap! if you pet it i will tear up your hand twitch tail in permanent irritation.</p>
      </div>
    </Container>
  )
}
