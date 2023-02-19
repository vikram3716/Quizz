const questions = [
  {
    Q: "What does the Acronym REST Stand for?",
    " a": "Representational State Transform",
    b: "Representational State Transfer",
    c: "Represent State Transform",
    d: "Represent State Transfer",
    correct: "b",
  },

  {
    Q: "What is the protocol used in REST?",
    a: "FTP",
    " b": "HTTP",
    c: "JMX",
    " d": "SOAP",
    correct: "b",
  },

  {
    Q: " What is the HTTP Status Code Related to Page Not Found?",
    a: "402",
    " b": "404",
    c: "403",
    d: "401",
    correct: "b",
  },

  {
    " Q": "What is the HTTP Code Related to Internal Server Error?",
    a: "500",
    b: "501",
    c: "504",
    d: "502",
    correct: " a",
  },

  {
    Q: "What is the HTTP Code 200 Indicate?",
    a: "Error",
    b: "Completed",
    c: "Success",
    " d": "Warning",
    correct: " c",
  },

  {
    Q: "Which HTTP method do we use to make an HTTP request to create a new resource?",
    a: "POST",
    "  b": "PUT",
    " c": "GET",
    " d": "CREATE",
    correct: " a",
  },

  {
    Q: "Which HTTP method do we use to make an HTTP request to update an existing resource?",
    a: "POST",
    " b": "PUT",
    c: "UPDATE",
    d: "DELETE",
    correct: "b",
  },

  {
    Q: "Choose the correct URI format to get a sub-resource by resource id and sub-resource id",
    a: "/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}",
    b: "/{resource}/{sub-resource}/{sub-resource-id}",
    c: "{sub-resource}/{sub-resource-id}/{resource}/{resource-id}",
    d: "/{resource}/{resource-id}/{sub-resource-id}/{sub-resource}",
    correct: "a",
  },

  {
    Q: " Which is not REST Architectural Constraints?",
    a: "Client-Server",

    b: "Stateless",

    c: "Cacheable",

    d: "Service orchestration",
    " correct": "d",
  },

  {
    Q: "What is the HTTP status code 201 indicate?",

    a: "OK",

    b: "Created",

    c: "Accepted",

    d: "No Content",
    correct: "b",
  },
];
console.log(questions[9]);
let index = 0;
let r = 0;
let w = 0;
let t = questions.length;
let que = document.getElementById("quest");
let opt = document.querySelectorAll("#option");

const load = () => {
  if (index == t) {
    return finishquiz();
  } else {
    reset();
  }
  const data = questions[index];
  document.getElementById("currentno").innerText = `${index + 1} / 10`;
  que.innerText = ` ${index + 1} ) ${data.Q}`;
  opt[0].nextElementSibling.innerText = data.a;
  opt[1].nextElementSibling.innerText = data.b;
  opt[2].nextElementSibling.innerText = data.c;
  opt[3].nextElementSibling.innerText = data.d;
};

load();

// console.log(index);
function changeQuestion() {
  index++;
  load();
}

function submitquizz() {
  const data = questions[index];
  let ans = getdata();
  if (ans == data.correct) {
    r++;
  } else {
    w++;
  }
  index++;
  load();
  return;
}

const getdata = () => {
  let anser;
  opt.forEach((input) => {
    if (input.checked) {
      anser = input.value;
    }
  });

  return anser;
};

function reset() {
  opt.forEach((input) => {
    input.checked = false;
  });
}

function finishquiz() {
  let namee = localStorage.getItem("usernamee");
  document.getElementById(
    "first_question"
  ).innerHTML = `<h1>Successfully completed Quizz</h1>
  <h2>${namee} you have scored ${r} out ${t} </h2>
  `;
}

function previous() {
  if (index > 0) {
    index--;
    load();
  }
}
