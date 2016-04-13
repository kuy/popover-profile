import { combineReducers } from 'redux';
import { reducer as profile } from '../common/features/popover-profile';
import { reducer as tooltip } from 'redux-tooltip';

const TEXT1 = `She saw a secret little clearing, and a secret little hot made of rustic poles.
And she had never been here before! She realized it was the quiet place where the growing pheasants were reared;
the keeper in his shirt‑sleeves was kneeling, hammering. The dog trotted forward with a short,
sharp bark, and the keeper lifted his face suddenly and saw her. He had a startled look in his eyes.`;

const TEXT2 = `SIR, -There is nothing moves my charity like gratitude; and when a beggar's thankful for a small relief,
I always repent it was not more. But seriously, this place will not afford much towards the enlarging of a letter,
and I am grown so dull with living in't (for I am not willing to confess that I was always so) as to need all helps.
Yet you shall see I will endeavour to satisfy you, upon condition you will tell me why you quarrelled so at your last letter.
I cannot guess at it, unless it were that you repented you told me so much of your story, which I am not apt to believe neither,
because it would not become our friendship, a great part of it consisting (as I have been taught) in a mutual confidence.
And to let you see that I believe it so, I will give you an account of myself, and begin my story, as you did yours,
from our parting at Goring House.`;

const initial = {
  items: [
    { id: 1, body: TEXT2, username: 'banana', at: 1459921468422 },
    { id: 0, body: TEXT1, username: 'apple', at: 1459919080706 },
  ]
};

function app(state = initial, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default combineReducers(
  { app, profile, tooltip }
);
