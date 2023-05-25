// let n = 10;
// let sum = "";
// for (let i = 0; i < n; i++) {
//   sum += "*";
//   console.log(sum);
// }

// let n = 10;
// let sum = "*";
// for (let i = 0; i < n; i++) {
//   sum += "**";
//   console.log(sum);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let star = "*";
//   let space = " ";
//   console.log(
//     `${space.repeat(n - i)}${star.repeat(2 * i - 1)}${space.repeat(n - i)}`
//   );
// }

// for (let i = n; i >= 1; i--) {
//   let star = "*";
//   let space = " ";
//   console.log(`${space.repeat(n - i)}${star.repeat(2 * i - 1)}`);
// }

function baklava(n) {
  for (let i = 1; i <= n; i++) {
    let star = "*";
    let space = " ";
    console.log(
      `${space.repeat(n - i)}${star.repeat(2 * i - 1)}${space.repeat(n - i)}`
    );
  }

  for (let i = n; i >= 1; i--) {
    let star = "*";
    let space = " ";
    console.log(`${space.repeat(n - i)}${star.repeat(2 * i - 1)}`);
  }
}
baklava(7);
