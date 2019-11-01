/* Step 1: using axios, send a GET request to the following URL 
    (replacing the palceholder with your Github name):
    https://api.github.com/users/<your name>
*/

    // i noticed axios does not like semi-colons

/* Step 2: Inspect and study the data coming back, this is YOUR 
    github info! You will need to understand the structure of this 
    data in order to use it to build your component function 

    Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
    create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
    follow this link in your browser https://api.github.com/users/<Your github name>/followers 
    , manually find some other users' github handles, or use the list found 
    at the bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const bigContainer = document.querySelector('.cards');

const followersArray = ['wchamber01', 'Anaxilaus', 'KaiHaskell', 'bseverino', 'lyndsiWilliams'];

axios.get('https://api.github.com/users/miguelqnicolas')
    .then(response => {
        bigContainer.append(createUser(response.data));
        // bigContainer.append.forEach(function(iteration) {
        //     axios.get(`https://api.github.com/users/${iteration}`)
        //         then(res => {
        //             createUser(res.data)
        //         })
                // would you do get request inside of for each or for each inside of get request? wait, i think you have to create seperate get requests...
        // });
    })
    .catch(error => {
        console.log('There was an error:', error);
    })

followersArray.forEach(function(iteration) {
    axios.get(`https://api.github.com/users/${iteration}`)
        .then(response => {
            bigContainer.append(createUser(response.data));
        })
});

// not sure how to work this

    /* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createUser(object) {
    const smallContainer = document.createElement('div');

    const image = document.createElement('img');
    const info = document.createElement('div');
        const name = document.createElement('h3');
        const username = document.createElement('p');
        const location = document.createElement('p');
        const profile = document.createElement('p');
            const link = document.createElement('a');
        const followers = document.createElement('p');
        const following = document.createElement('p');
        const bio =  document.createElement('p');

    image.src = object.avatar_url;
    name.textContent = 
    // how to use this down there with bio.textContent
    username.textContent = object.login;
    location.textContent = `Location: ${object.location}`;
    link.href = object.html_url;
    link.textContent = `Profile: ${object.html_url}`;
    followers.textContent = `Followers: ${object.followers}`;
    following.textContent = `Following: ${object.following}`;
    bio.textContent = `Bio: ${object.bio ? object.bio : 'No bio'}`;

    smallContainer.classList.add('card');
    info.classList.add('card-info');
    name.classList.add('name');
    username.classList.add('username');

    smallContainer.append(image, info);
    info.append(name, username, location, profile, followers, following, bio);
    profile.appendChild(link);

    return smallContainer;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/