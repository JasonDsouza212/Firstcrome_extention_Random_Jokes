fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(joke=>{
    const joketext=joke.attachments[0].text;
    const joke_element=document.getElementById('joke_element');
    joke_element.innerHTML=joketext;

})