const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//function email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, `Email is not valids`)
    }
}

function checkRequired(inputArr){
    //High Order Array methods
    inputArr.forEach((input) => {
        //trim white space
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`);
            console.log(input);
        }else {
            showSuccess(input);
        }
    });
}

function checkLength(input,min,max){
    if(input.value.length < min) {
        showError(input,`${getFieldName(input)} must be at least ${min}`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max}`);
    }else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`Pasword do not match`);
    }
}

function getFieldName(input){
    //make the first character uppercase and add the rest using the slice
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    //prevent from its usual behavior
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password,password2);
});




// Your second example means that the first class requires two classes to be affected. Other than that it's equal to the first one.

// <div class="element large">
//     <div class="symbol" />
// </div>
// So if the HTML looks like this, the CSS values will be applied to the inner <div> tag as well.