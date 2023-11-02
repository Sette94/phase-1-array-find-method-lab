// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
]


function superbowlWin(arr) {
    let win = arr.find((arr) => arr.result == "W")
    if (win) {
        let result = win.year
        return result
    }

}

superbowlWin(record)