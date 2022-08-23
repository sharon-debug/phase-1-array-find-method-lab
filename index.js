// code your solution here
const superbowlWin = (record) => {
    for (let rec of record) {
        if (rec.result === "W") {
            return rec.year;
        }
    }
}