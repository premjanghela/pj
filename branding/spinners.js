document.addEventListener("DOMContentLoaded", function() {
    // Show the spinner
    let spinner = document.createElement("div");
    spinner.id = "spinner";
    spinner.style.position = "fixed";
    spinner.style.top = "0";
    spinner.style.left = "0";
    spinner.style.width = "100%";
    spinner.style.height = "100%";
    spinner.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Dark translucent background
    spinner.style.display = "flex";
    spinner.style.flexDirection = "column";
    spinner.style.justifyContent = "center";
    spinner.style.alignItems = "center";
    spinner.style.zIndex = "9999";
    spinner.style.transition = "opacity 0.5s ease-out"; // Smooth transition for hiding

    let spinnerIcon = document.createElement("div");
    spinnerIcon.style.border = "8px solid #333";
    spinnerIcon.style.borderTop = "8px solid #3498db"; // Bright blue for contrast
    spinnerIcon.style.borderRadius = "50%";
    spinnerIcon.style.width = "60px";
    spinnerIcon.style.height = "60px";
    spinnerIcon.style.animation = "spin 1.5s linear infinite"; // Slightly faster spin for a stylish effect

    let poweredByText = document.createElement("p");
    poweredByText.innerText = "Powered By || Prem Janghela";
    poweredByText.style.marginTop = "150px"; // Adjusted margin to 150px
    poweredByText.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"; // Stylish font
    poweredByText.style.fontSize = "14px";
    poweredByText.style.fontWeight = "bold"; // Bold text
    poweredByText.style.color = "#ffffff"; // White text for contrast

    spinner.appendChild(spinnerIcon);
    spinner.appendChild(poweredByText);
    document.body.appendChild(spinner);

    // Spinner CSS animation
    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Remove background color for the body */
        body {
            color:; /* White text for contrast */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    `;
    document.head.appendChild(styleSheet);

    // Hide spinner after 5 seconds with smooth fade-out
    setTimeout(function() {
        spinner.style.opacity = "0";
        setTimeout(function() {
            spinner.style.display = "none";
        }, 500); // Wait for the fade-out transition to complete before hiding
    }, 5000);
});
