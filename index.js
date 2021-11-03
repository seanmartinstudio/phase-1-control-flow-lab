//

function scuberGreetingForFeet(distance) {
  let price;
  if (distance <= 400) {
    price = "This one is on me!";
  } else if (distance > 2500) {
    price = "No can do.";
  } else if (distance > 2000) {
    price = "I will gladly take your thirty bucks.";
   }
   return price;
  }
  scuberGreetingForFeet(199);

//

function ternaryCheckCity(city) {
  let message;
  message = city === "NYC" ? ("Ok, sounds good.") : ("No go.");
  return message;
}
ternaryCheckCity("NYC");

//

function switchOnCharmFromTip(tip) {
  let message;
  switch (tip) {
    case 'generous':
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    default:
      message = "Bye."
      break;
  }
  return message;
}
switchOnCharmFromTip("tip is generous");