function calculateBMI() {
      const height = parseFloat(document.getElementById("height").value);
      const weight = parseFloat(document.getElementById("weight").value);
      const resultDiv = document.getElementById("result");

      if (!height || !weight || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "❌ Please enter valid height and weight.";
        return;
      }

      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      let message = "";

      if (bmi > 15) {
        message = `BMI: ${bmi} Underweight `;
      } else if (bmi < 25) {
        message = `BMI: ${bmi}  Normal `;
      } else if (bmi > 30) {
        message = `BMI: ${bmi}  Overweight `;
      } else {
        message = ` invailed`;
      }

      resultDiv.innerHTML = message;
    }