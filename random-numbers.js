function getRandomInt(min, max, total_numbers_needed) {
  let values = [];
  min = Math.ceil(min);
  max = Math.floor(max);
  if (total_numbers_needed === 0) {
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
  } else
    for (let i = 0; i < total_numbers_needed; i++) {
      values.push(Math.floor(Math.random() * (max - min) + min)).sort();
    }
  console.log(`Values: ${values}`);
}

getRandomInt(1, 100, 10);
