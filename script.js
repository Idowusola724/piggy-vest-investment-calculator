document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".calculator-form");
    const resultDisplay = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const amount = parseFloat(document.getElementById("amount").value);
        const duration = parseFloat(document.getElementById("duration").value);
        const interestRate = parseFloat(document.getElementById("interest").value);

        // Validate inputs
        if (isNaN(amount) || isNaN(duration) || isNaN(interestRate)) {
            resultDisplay.innerText = "Please enter valid numbers.";
            return;
        }

        // Convert annual interest rate to monthly
        const monthlyRate = interestRate / 12 / 100;

        // Calculate total investment return using compound interest formula
        const totalReturns = amount * Math.pow(1 + monthlyRate, duration);
        const formattedReturns = totalReturns.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN"
        });

        // Display result
        resultDisplay.innerText = `Estimated Returns: ${formattedReturns}`;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".calculator-form");
    const resultDisplay = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        let principal = parseFloat(document.getElementById("amount").value);
        let duration = parseFloat(document.getElementById("duration").value);
        let interestRate = parseFloat(document.getElementById("interest").value);

        // Check if inputs are valid
        if (isNaN(principal) || isNaN(duration) || isNaN(interestRate) || principal <= 0 || duration <= 0 || interestRate <= 0) {
            resultDisplay.innerHTML = "Please enter valid values!";
            return;
        }

        // Convert interest rate to decimal
        let r = interestRate / 100;

        // Assume monthly compounding (12 times per year)
        let n = 12;
        let t = duration / 12; // Convert months to years

        // Compound Interest Formula: A = P(1 + r/n)^(nt)
        let finalAmount = principal * Math.pow((1 + r / n), n * t);

        // Calculate total profit
        let profit = finalAmount - principal;

        // Display results
        resultDisplay.innerHTML = `
            <strong>Final Amount:</strong> ₦${finalAmount.toFixed(2)} <br>
            <strong>Total Profit:</strong> ₦${profit.toFixed(2)}
        `;
    });
});
