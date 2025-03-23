document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".calculator-form");
    const resultDisplay = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let principal = parseFloat(document.getElementById("amount").value);
        let duration = parseFloat(document.getElementById("duration").value);
        let interestRate = parseFloat(document.getElementById("interest").value);

        console.log("Principal:", principal);
        console.log("Duration:", duration);
        console.log("Interest Rate:", interestRate);

        if (isNaN(principal) || isNaN(duration) || isNaN(interestRate) || principal <= 0 || duration <= 0 || interestRate <= 0) {
            resultDisplay.innerHTML = "❌ Please enter valid numbers!";
            return;
        }

        let r = interestRate / 100;
        let n = 12;
        let t = duration / 12;

        let finalAmount = principal * Math.pow(1 + (r / n), n * t);
        let profit = finalAmount - principal;

        let formattedFinalAmount = finalAmount.toLocaleString("en-NG", { style: "currency", currency: "NGN", minimumFractionDigits: 2 });
        let formattedProfit = profit.toLocaleString("en-NG", { style: "currency", currency: "NGN", minimumFractionDigits: 2 });

        resultDisplay.innerHTML = `
            <strong>📊 Final Amount:</strong> ${formattedFinalAmount} <br>
            <strong>💰 Total Profit:</strong> ${formattedProfit}
        `;
    });
});

