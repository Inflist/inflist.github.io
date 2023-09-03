//-----------------DELETE-----------------

const usernameInputForm = document.getElementById('username');
usernameInputForm.addEventListener("input", function (event){
});

//-----------------DELETE-----------------

const emailInputForm = document.getElementById('email');
emailInputForm.addEventListener("input", function (event){
});

//-----------------DELETE-----------------

const passwordInputForm = document.getElementById('password-field');
passwordInputForm.addEventListener("input", function (event){
});

//-----------------Password Button----------------- 
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password-field");
    var showPasswordBtn = document.getElementById("show-password-btn");
    
    if (passwordField.type === "password") {
      passwordField.type = "text";
      showPasswordBtn.textContent = "Hide";
    } else {
      passwordField.type = "password";
      showPasswordBtn.textContent = "Show";
    }
  
//-----------------Password Button Focus-----------------
    if (passwordField.type === "text") {
      passwordField.focus();
      } 
      const value = passwordField.value;
      const lastIndex = value.lastIndexOf(" ");
      if (lastIndex !== -1) {
        // Set the cursor to the end of the last word
        passwordField.setSelectionRange(lastIndex + 1, value.length);
      } else {
        // Set the cursor to the end of the input
        passwordField.setSelectionRange(value.length, value.length);
      }
    }


//-----------------[TEST] Email Send Form-----------------
    const downloadFile = () => {
        const url = 'https://example.com/path/to/file.pdf';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
          if (xhr.status === 200) {
            const blob = xhr.response;
            const filename = 'file.pdf';
            if (window.navigator.msSaveOrOpenBlob) {
              // For IE and Edge browsers
              window.navigator.msSaveBlob(blob, filename);
            } else {
              // For other browsers
              const link = document.createElement('a');
              const url = URL.createObjectURL(blob);
              link.href = url;
              link.download = filename;
              document.body.appendChild(link);
              link.click();
              setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
              }, 0);
            }
          }
        }
      };
    const button = document.getElementById('create-account-btn');
      button.addEventListener('click', (event) => {
        event.preventDefault();
        downloadFile();
      });

//-----------------Inputs Focus-----------------
      const emailInput = document.querySelector('.create-card input[type="email"]');
      emailInput.addEventListener('focus', () => {
        emailInput.style.backgroundColor = 'white';
      });
      emailInput.addEventListener('blur', () => {
        if (emailInput.value !== '') {
          emailInput.style.backgroundColor = 'rgb(232, 240, 254)';
        }else {
          emailInput.style.backgroundColor = '';
        }
      });
      const passwordInput = document.querySelector('.create-card input[type="password"]');
      passwordInput.addEventListener('focus', () => {
        passwordInput.style.backgroundColor = 'white';
      });
      passwordInput.addEventListener('blur', () => {
        if (passwordInput.value !== '') {
          passwordInput.style.backgroundColor = 'rgb(232, 240, 254)';
        }else {
          passwordInput.style.backgroundColor = '';
        }
      });
      const usernameInput = document.querySelector('.create-card input[type="username"]');
      usernameInput.addEventListener('focus', () => {
        usernameInput.style.backgroundColor = 'white';
      });
      
      usernameInput.addEventListener('blur', () => {
        if (usernameInput.value !== '') {
          usernameInput.style.backgroundColor = 'rgb(232, 240, 254)';
        } else {
          usernameInput.style.backgroundColor = '';
        }
      });




//-----------------[ Username Email Password ] Test-----------------
      document.getElementById("create-account-btn").addEventListener("click", function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password-field").value;
        let usernameRegex = /^.{3,}$/;
        let emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,4}$/;
        let passwordRegex = /^(?=.*\d)(?=.*).{8,}$/;
        let isValid = true;
        let errorCount = 0;
        // Create a new <lord-icon> element
        let lordIcon = document.createElement("lord-icon");
        const previousWarningIcon = document.querySelector('.warning-icon');
        if (!usernameRegex.test(username) || !emailRegex.test(email) || !passwordRegex.test(password)) {
          isValid = false;
          //alert("Please enter valid information.");
          errorCount += 1;
          // Append the <video> element to the body
        document.body.appendChild(lordIcon);
            // Remove the previous warning icon if it exists
            if (previousWarningIcon) {
              previousWarningIcon.remove();
            }

            
//-----------------Error IMG-----------------
        const img = document.createElement('img');
        img.src = "warning.png";
        img.classList.add('warning-icon'); // Add a class to the warning icon for easier selection later
        document.body.appendChild(img);}

          
//-----------------Error counter-----------------
          errorCount += 1;
          if (errorCount >= 6) {
            //alert("Too many attempts. Please try again later.");
          }
//-----------------Moo [DELETE]-----------------          
        if (username === "Moo") {
        isValid = false;
        let h1 = document.createElement("h1");
        h1.textContent = "Username used";
        document.body.appendChild(h1);
        
       }
        
//-----------------Previous Error Remove-----------------


if (previousWarningIcon) {
  previousWarningIcon.remove();
}
//-----------------if valid = ""-----------------
//-----------------DELETE------------------

        if (username === "") {
          alert("Please enter a username.");
        }
        if (email === "") {
          alert("Please enter an email.");
        }
        if (password === "") {
          alert("Please enter a password.");
        }
//-----------------Files Uploader----------------- 
// Get the file input element
const fileInput = document.getElementById("fileInput");

// Listen for changes to the file input
fileInput.addEventListener("change", function() {
  // Get the selected files
  const files = fileInput.files;

  // Loop through the selected files and log them to the console
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    
    reader.addEventListener("load", function() {
      console.log(reader.result);
    });
    
    reader.readAsDataURL(file);
  }
  });
//-----------------Correct value [DELETE]-----------------
        if (isValid){
        console.log(`Username Correct value: ${usernameInputForm.value}`);
        console.log(`Email Correct value: ${emailInputForm.value}`);
        console.log(`Password Correct value: ${passwordInputForm.value}`);    
//-----------------After Page-----------------
        const container = document.createElement('div');
        container.classList.add('create-card-container-success');
      
        const card = document.createElement('div');
        card.classList.add('create-card');
      
        const logo = document.createElement('div');
        logo.classList.add('logo');
      
        const img = document.createElement('img');
        img.src = 'cloud (5).png';
        img.alt = 'Logo';
        logo.appendChild(img);
      
        const cardLogo = document.createElement('div');
        cardLogo.classList.add('create-card-logo');
      
        const textHeader = document.createElement('div');
        textHeader.classList.add('text-header');
      
        const h1 = document.createElement('h1');
        h1.textContent = 'Thanks For Support';
        textHeader.appendChild(h1);
      
        const div1 = document.createElement('div');
        div1.textContent = 'We appreciate it';
        textHeader.appendChild(div1);
      
        const mainText = document.createElement('div');
        mainText.classList.add('main-text');
      
        const div2 = document.createElement('div');
        div2.textContent = 'Your support is very important for us. We can\'t wait to see you in our social network.';
        mainText.appendChild(div2);
      
        const bottomText = document.createElement('div');
        bottomText.classList.add('bottom-text');
      
        const div3 = document.createElement('div');
        div3.textContent = 'After release we will let you know';
        bottomText.appendChild(div3);
      
        cardLogo.appendChild(textHeader);
        cardLogo.appendChild(mainText);
        cardLogo.appendChild(bottomText);
      
        card.appendChild(logo);
        card.appendChild(cardLogo);
      
        container.appendChild(card);
        document.body.appendChild(container);
        const form = document.createElement('div-form');
        form.classList.add('create-card-container-success');
        document.body.appendChild(form);
        const createCardContainer = document.querySelector('.create-card-container');
        createCardContainer.style.display = 'none';
      }
});