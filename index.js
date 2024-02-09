function calculateMoney(ticketSale) {
	const ticketPerPrice = 120;
	const totalTicketPrice = ticketSale * ticketPerPrice;
	const guardDailyFee = 500;
	const totalStaff = 8;
	const lunchPerCost = 50;
	const totalStaffLunchCost = totalStaff * lunchPerCost;
	const totalCost = guardDailyFee + totalStaffLunchCost;
	if (ticketSale < 0) {
		return "Invalid Number";
	} else {
		const remainingAmount = totalTicketPrice - totalCost;
		return remainingAmount;
	}
}

function checkName(name) {
	if (typeof name !== "string") {
		return "invalid";
	} else {
		let nameLetterArray = [];
		for (const letter of name) {
			nameLetterArray.unshift(letter);
		}
		const lastLetter = nameLetterArray[0].toLowerCase();
		if (
			lastLetter === "a" ||
			lastLetter === "y" ||
			lastLetter === "i" ||
			lastLetter === "e" ||
			lastLetter === "o" ||
			lastLetter === "u" ||
			lastLetter === "w"
		) {
			return "Good Name";
		} else {
			return "Bad Name";
		}
	}
}

function deleteInvalids(array) {
	if (Array.isArray(array) === false) {
		return "Invalid Array";
	} else {
		let onlyNumber = [];
		for (const item of array) {
			if (typeof item === "number" && Number.isNaN(item) === false) {
				onlyNumber.push(item);
			}
		}
		return onlyNumber;
	}
}

function password(obj) {
	const objKeysArray = Object.keys(obj);
	const objLength = objKeysArray.length;
	if (objLength !== 3) {
		return "Invalid";
	} else {
		const birthYear = obj["birthYear"];
		const birthYearLength = birthYear.toString().length;
		if (birthYearLength !== 4) {
			return "Invalid";
		} else {
			const userName = obj["name"];
			const siteName = obj["siteName"];
			const capitalizeSiteName =
				siteName.charAt(0).toUpperCase() + siteName.slice(1);
			const password = capitalizeSiteName + "#" + userName + "@" + birthYear;
			return password;
		}
	}
}

function monthlySavings(arr, livingCost) {
	if (!Array.isArray(arr)) {
		return "invalid input";
	} else if (typeof livingCost !== "number") {
		return "invalid input";
	} else {
		let totalIncome = 0;
		for (const singlePayment of arr) {
			if (singlePayment >= 3000) {
				const tax = singlePayment * (20 / 100);
				const remainingAmount = singlePayment - tax;
				totalIncome += remainingAmount;
			} else {
				totalIncome += singlePayment;
			}
		}
		const totalSaving = totalIncome - livingCost;
		if (totalSaving < 0) {
			return "earn more";
		} else {
			return totalSaving;
		}
	}
}
