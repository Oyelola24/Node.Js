import generator from "generate-password";

const otp = generator.generate({
  length: 10,
  numbers: true,
});

console.log(otp);