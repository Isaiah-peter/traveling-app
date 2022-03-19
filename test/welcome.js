function descending(a, b, c) {
  if (a > b && a > c && b > c) {
    console.log(a, b, c);
  }
  if (a > b && a > c && c > b) {
    console.log(a, c, b);
  } else if (b > a && b > c && a > c) {
    console.log(b, a, c);
  } else if (b > a && b > c && c > a) {
    console.log(b, c, a);
  } else if (c > a && c > b && a > b) {
    console.log(c, a, b);
  } else if (c > a && c > b && b > a) {
    console.log(c, b, a);
  } else {
    console.log(a, b, c);
  }
}

function ascending(a, b, c) {
  if (a < b && a < c && b < c) {
    console.log(a, b, c);
  }
  if (a < b && a < c && c < b) {
    console.log(a, c, b);
  } else if (b < a && b < c && a < c) {
    console.log(b, a, c);
  } else if (b < a && b < c && c < a) {
    console.log(b, c, a);
  } else if (c < a && c < b && a < b) {
    console.log(c, a, b);
  } else if (c < a && c < b && b < a) {
    console.log(c, b, a);
  } else {
    console.log(a, b, c);
  }
}
descending(7, 2, 5);
ascending(8, 7, 5);

function ascendingUsingSort(a, b, c) {
  const result = [a, b, c];
  const ascend = result.sort((a, b) => a - b);
  console.log(ascend.join(","));
}
function descendingUsingSort(a, b, c) {
  const result = [a, b, c];
  const descend = result.sort((a, b) => b - a);
  console.log(descend.join(","));
}

descendingUsingSort(4, 8, 9);

ascendingUsingSort(4, 8, 9);

function t(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
    console.log(nums[i]);
  }
}

t(8);

const properties = [
  {
    name: "username",
    validator: /^[a-zA-Z\s-]+$/,
    warning: "Username must be only letters, spaces, or dashes",
  },
  {
    name: "password",
    hidden: true,
  },
];

let is = prompt("");
console.log(is);
