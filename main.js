const foods = ['stew', 'pizza', 'pudding', 'cookie', 'biscuit', 'peanutbutter', 'pasta', 'soup', 'bread', 'beans', 'spaghetti', 'chocolate', 'cracker', 'jam', 'butter', 'steak', 'cigarette', 'fruit', 'vinegums', 'meat', 'patty', 'meatloaf', 'chicken', 'patee', 'candy', 'macaroni', 'coffee'];
const words = ['almost', 'certainly', 'really', 'probably', 'maybe', 'utmost', 'nearly', 'practically', 'unquestionally', 'surely', 'definitely', 'undeniably', 'evidently', 'conclusively', 'likely', 'no doubt', 'possibly', 'perhaps', 'presumably'];
const tasteAdjectives = ['acidic', 'bitter', 'cool', 'creamy', 'delicious', 'disgusting', 'fresh', 'greasy', 'juicy', 'hot', 'moldy', 'nutritious', 'nutty', 'putrid', 'rancid', 'ripe', 'rotten', 'salty', 'savory', 'sour', 'spicy', 'spoiled', 'sweet', 'tangy', 'tart', 'tasteless', 'tasty', 'tasty', 'yummy', 'nice', 'unpleasant', 'palatable', 'tasty', 'toothsome', 'succulent', 'enjoyable', 'mouthwatering', 'appetizing'];
const verbs = ['like', 'love', 'hate', "don't know how i feel about", 'dislike', 'worship', 'adore', 'despise', 'dislikegreatly', 'be revolted by', 'be repelled by', 'disrelish', 'make out of']

const getRandomInt = max => Math.floor(Math.random() * max.length);

const messageGenerator = (arr1, arr2, arr3, arr4) => {
  const randArr1 = getRandomInt(arr1);
  const randArr2 = getRandomInt(arr2);
  const randArr3 = getRandomInt(arr3);
  const randArr4 = getRandomInt(arr4);
  let element = arr1[randArr1];
  if (element[element.length - 1] === 's') {
    return `These ${arr1[randArr1]} are ${arr2[randArr2]} ${arr3[randArr3]} and i ${arr4[randArr4]} it`;
  } else {
    return `This ${arr1[randArr1]} is ${arr2[randArr2]} ${arr3[randArr3]} and i ${arr4[randArr4]} it`;
  }
};

const sendMessage = () => document.getElementById("message").innerHTML = messageGenerator(foods, words, tasteAdjectives, verbs);