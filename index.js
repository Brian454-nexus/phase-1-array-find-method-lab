// 1️⃣ Define the function
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// 2️⃣ Define the data
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
];

// 3️⃣ Call the function and log the result
console.log(superbowlWin(record)); // Output: "2015"
