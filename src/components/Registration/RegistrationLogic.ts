import Astronaut from "./../../images/profile_default_sketchs_png/astronaut.png";
import Astronaut2 from "./../../images/profile_default_sketchs_png/astronaut2.png";
import Meteor from "./../../images/profile_default_sketchs_png/meteor.png";
import Moon from "./../../images/profile_default_sketchs_png/moon.png";
import Planet from "./../../images/profile_default_sketchs_png/planet.png";
import Rocket from "./../../images/profile_default_sketchs_png/rocket.png";
import SmallRocket from "./../../images/profile_default_sketchs_png/small-rocket.png";
import Sonda from "./../../images/profile_default_sketchs_png/sonda.png";
import Star from "./../../images/profile_default_sketchs_png/star.png";

export const profileSketchs = [
  Astronaut,
  Astronaut2,
  Meteor,
  Moon,
  Planet,
  Rocket,
  SmallRocket,
  Sonda,
  Star,
];

export const validation = (
  login: string,
  name: string,
  password: string
): boolean | string => {
  const regExp = new RegExp("[0-9]", "g");
  const passwordWithTwoNumbers = regExp.test(password);
  const minLoginAndNameLength = 3;
  const maxLoginAndNameLength = 20;
  const minPasswordLength = 5;

  if (login === "" || name === "" || password === "") {
    return "Uzupełnij wszystkie pola!";
  } else if (login.length < minLoginAndNameLength) {
    return `Login musi mieć co najmniej ${minLoginAndNameLength} znaki.`;
  } else if (login.length > maxLoginAndNameLength) {
    return `Login jest za długi (max ${maxLoginAndNameLength} znaków).`;
  } else if (name.length < minLoginAndNameLength) {
    return `Nazwa musi mieć co najmniej ${minLoginAndNameLength} znaki.`;
  } else if (name.length > maxLoginAndNameLength) {
    return `Nazwa jest za długa (max ${maxLoginAndNameLength} znaków).`;
  } else if (password.length < minPasswordLength) {
    return `Hasło musi mieć co najmniej ${minPasswordLength} znaków.`;
  } else if (!passwordWithTwoNumbers) {
    return "Hasło musi zawierać jedną lub więcej cyfr.";
  } else return true;
};
