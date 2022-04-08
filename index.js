setTimeout(function () {
  robotMessage();
}, 1500);

function robotMessage() {
  let message = ['Hello there!', 'How are you?', 'I am just a robot!'];
  let choice;

  do {
    choice = Math.floor(Math.random() * 10);
  } while (choice > 2);

  alert(message[choice]);
}

const robot1 = {
  name: 'John',
  color: 'red',
  type: 'male',
  receivedMessage: '',
};

const robot2 = {
  name: 'Lilly',
  color: 'green',
  type: 'female',
  receivedMessage: '',
};

robot1.receivedMessage = `Здравей, ${robot2.name}!`;
robot2.receivedMessage = robot1.receivedMessage;

// console.log(robot1.receivedMessage);
// console.log(robot2.receivedMessage);
