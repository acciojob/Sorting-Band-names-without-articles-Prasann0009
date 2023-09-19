//your code here
let bandNames = ['Aerosmith', 'The Beatles', 'Led Zeppelin' ,'The Rolling Stones'];

// Function to remove articles from band names
function removeArticles(name) {
  // Define a list of articles to be removed
  const articles = ['the', 'a', 'an'];

  // Split the name into words
  const words = name.split(' ');

  // Filter out articles and join the remaining words
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  return filteredWords.join(' ');
}

// Sort the band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create a ul element to display the sorted band names
const ulElement = document.createElement('ul');
ulElement.id = 'band';

// Iterate through the sorted band names and create li elements
bandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

// Append the ul element to the body or any other desired location
document.body.appendChild(ulElement);

