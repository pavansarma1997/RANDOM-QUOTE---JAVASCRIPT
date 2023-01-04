var a = document.getElementById('but');

a.addEventListener("click", () => {
    var url = (`https://type.fit/api/quotes`);
    fetch(url).then(result => result.json())
        .then(data => {
            var y = Math.floor(Math.random() * data.length);
            document.getElementById('que').innerHTML = data[y].text;
            document.getElementById('ans').innerHTML = data[y].author;
        })
})

