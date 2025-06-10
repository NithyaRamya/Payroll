function calculateSalary() {
  const basicSalary = parseFloat(document.getElementById("basicSalary").value) || 0;
  const workingDays = parseFloat(document.getElementById("workingDays").value) || 0;
  const leaveDays = parseFloat(document.getElementById("leaveDays").value) || 0;
  const additions = parseFloat(document.getElementById("additions").value) || 0;
  const deductions = parseFloat(document.getElementById("deductions").value) || 0;

  const presentDays = workingDays - leaveDays;

  if (workingDays === 0) {
    alert("Working days cannot be zero.");
    return;
  }

  const perDaySalary = basicSalary / workingDays;
  const calculatedSalary = (perDaySalary * presentDays) + additions - deductions;

  document.getElementById("totalSalary").value = `₹ ${calculatedSalary.toFixed(2)}`;
}

function resetForm() {
  document.querySelectorAll("input").forEach(input => {
    if (input.type !== "date" && input.id !== "totalSalary") {
      input.value = "";
    }
    if (input.id === "totalSalary") {
      input.value = "";
    }
  });
}
