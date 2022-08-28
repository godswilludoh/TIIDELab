/*A teacher instructs his trainees to queue in ascending order of their scores.
An Interesting pattern was a common difference in the scores.
When he compared his record with the queue he realized one of the trainee was no not found.
Write an Algorithm to locate the lacking score
Assumptions:
 1. Given that the misplaced score is between the  item in the last  and third item from the end;
 2. There will be at least 6 known scores

Expected output:  The missing score is <score> found at position <position>

where <score> and <position> are placeholders

Sample scores : [45,50,55,65,70,75,80,85,90,95]
Output : The missing score is 60 found at position 3*/

const getScore = (arr) => {
	//getting difference
	let difference = arr[1] - arr[0] === arr[2] - arr[1] ? arr[1] - arr[0] : 0;
	let score = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (score !== arr[i]) {
			console.log(`The missing score is ${score} found at position ${i}`);
			break;
		}

		score += difference;
	}
};
getScore([45, 50, 55, 65, 70, 75, 80, 85, 90, 95]);
