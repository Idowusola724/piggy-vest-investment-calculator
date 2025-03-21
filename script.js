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
