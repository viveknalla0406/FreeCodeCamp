function palindrome(str) {
    	let stringFormatted = str.replace(/[^A-Za-z0-9]/g, '');
		
			const sequenceLength = stringFormatted.length;

			const stringActualSequence = stringFormatted.toLowerCase().split('');

			const stringReverseSequence = stringActualSequence.reverse();

    for (let index = 0; index < (sequenceLength - 1 )/ 2; index++) {
				if (stringActualSequence[index] !== stringReverseSequence[sequenceLength - index - 1]) {
					return false;
					break;
			}
  }
  
	return true;
}
