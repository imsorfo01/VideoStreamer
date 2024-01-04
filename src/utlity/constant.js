export const youtubeLogo= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png"
export const logInLogo ='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052'

// AIzaSyC82MZZO19gAayU7aapK267E6a4pKJK5_8

export const youtubeApi = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='

export const youtubeApiKey =  'AIzaSyCVPJpDe1XqkjqkPHN24vT7k8adrgR9Nk8'
// http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query
export const suggestedDataApi="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const generateRandomName = ()=> {
  const prefixes = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
  const suffixes = ['Prime', 'Omega', 'Zeta', 'Sigma', 'Theta'];

  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return randomPrefix + ' ' + randomSuffix;
}

export const generateRandomMessage=()=> {
  const messages = [
    'Hello, how are you?',
    'What a beautiful day!',
    'Coding is fun!',
    'Keep smiling!',
    'Stay positive!'
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return randomMessage;
}
 
