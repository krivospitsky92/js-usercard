
let obj;
fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        obj = data;
         render()
        });

function render() {
    const loremText = `Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Repudiandae commodi sint,
     obcaecati vero ipsam ab fugiat amet aspernatur dolorem 
     ullam tempora architecto cum natus at harum necessitatibus
      provident. Voluptates, ea?`;

    const img = document.createElement('img');
    const div1 = document.querySelector('#div1');
    div1.prepend(img);
    img.src = obj.results[0].picture.large;
    const name = document.createElement('h3');
    div1.append(name);
    name.textContent = `${obj.results[0].name['first']} ${obj.results[0].name['last']}`;
    const email = document.createElement('h4');
    div1.append(email);
    email.textContent = obj.results[0].email
    const lorem = document.createElement('p');
    div1.append(lorem);
    lorem.textContent = `${loremText}`
    //-----------------------------------------------------------
    const img2 = document.createElement('img');
    const div2 = document.querySelector('#div2');
    div2.prepend(img2);
    img2.src = obj.results[1].picture.large;
    const name_2 = document.createElement('h3');
    div2.append(name_2);
    name_2.textContent = `${obj.results[1].name['first']} ${obj.results[1].name['last']}`;
    const email_2 = document.createElement('h4');
    div2.append(email_2);
    email_2.textContent = obj.results[1].email;
    const lorem_2 = document.createElement('p');
    div2.append(lorem_2);
    lorem_2.textContent = `${loremText}`
    //-----------------------------------------------------------
    const img3 = document.createElement('img');
    const div3 = document.querySelector('#div3');
    div3.prepend(img3);
    img3.src = obj.results[2].picture.large;
    const name_3 = document.createElement('h3');
    div3.append(name_3);
    name_3.textContent = `${obj.results[2].name['first']} ${obj.results[2].name['last']}`;
    const email_3 = document.createElement('h4');
    div3.append(email_3);
    email_3.textContent = obj.results[2].email;
    const lorem_3 = document.createElement('p');
    div3.append(lorem_3);
    lorem_3.textContent = `${loremText}`
    //-----------------------------------------------------------
    const img4 = document.createElement('img');
    const div4 = document.querySelector('#div4');
    div4.prepend(img4);
    img4.src = obj.results[3].picture.large;
    const name_4 = document.createElement('h3');
    div4.append(name_4);
    name_4.textContent = `${obj.results[3].name['first']} ${obj.results[3].name['last']}`;
    const email_4 = document.createElement('h4');
    div4.append(email_4);
    email_4.textContent = obj.results[3].email;
    const lorem_4 = document.createElement('p');
    div4.append(lorem_4);
    lorem_4.textContent = `${loremText}`
    //-----------------------------------------------------------
    const img5 = document.createElement('img');
    const div5 = document.querySelector('#div5');
    div5.prepend(img5);
    img5.src = obj.results[4].picture.large;
    const name_5 = document.createElement('h3');
    div5.append(name_5);
    name_5.textContent = `${obj.results[4].name['first']} ${obj.results[4].name['last']}`;
    const email_5 = document.createElement('h4');
    div5.append(email_5);
    email_5.textContent = obj.results[4].email;
    const lorem_5 = document.createElement('p');
    div5.append(lorem_5);
    lorem_5.textContent = `${loremText}`
}