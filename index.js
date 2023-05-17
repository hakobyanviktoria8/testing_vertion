function calculate() {
  console.log("work");
  // Get input values
  const liquidityPool = parseFloat(
    document.getElementById("liquidityPool").value
  );
  const dividendPerkWh = parseFloat(
    document.getElementById("dividendPerkWh").value
  );
  const investment = parseFloat(document.getElementById("investment").value);
  const monthlyEnergyUsed = parseFloat(
    document.getElementById("monthlyEnergyUsed").value
  );
  const customers = parseFloat(document.getElementById("customers").value);

  // Calculate results
  const poolMonthlyDividend = customers * dividendPerkWh * monthlyEnergyUsed; //true
  const poolYearlyDividend = poolMonthlyDividend * 12; //true
  const yourShareOfThePool = (investment / liquidityPool) * 100; //true
  const yourMonthlyDividend =
    poolMonthlyDividend / (liquidityPool / investment); //? true
  const yourYearlyDividend = poolYearlyDividend / (liquidityPool / investment);
  const yourYearlyROI =
    (poolYearlyDividend / (liquidityPool / investment) / investment) * 100;

  // Update result fields
  document.getElementById("poolMonthlyDividend").innerHTML =
    poolMonthlyDividend.toFixed(2);
  document.getElementById("poolYearlyDividend").innerHTML =
    poolYearlyDividend.toFixed(2);
  document.getElementById("yourShareOfThePool").innerHTML =
    yourShareOfThePool.toFixed(2);
  document.getElementById("yourMonthlyDividend").innerHTML =
    yourMonthlyDividend.toFixed(2);
  document.getElementById("yourYearlyDividend").innerHTML =
    yourYearlyDividend.toFixed(2);
  document.getElementById("yourYearlyROI").innerHTML = yourYearlyROI.toFixed(2);
}

// Attach event listeners to input fields
document.getElementById("liquidityPool").addEventListener("input", calculate);
document.getElementById("dividendPerkWh").addEventListener("input", calculate);
document.getElementById("investment").addEventListener("input", calculate);
document
  .getElementById("monthlyEnergyUsed")
  .addEventListener("input", calculate);
document.getElementById("customers").addEventListener("input", calculate);
