// Shift label if input not empty
const labelShift = (id) => {
    if (document.getElementById(id) !== null) {
        document.getElementById(id).addEventListener("input", (e) => {
            if (e.target.value.length > 0) {
                e.target.nextElementSibling.classList.add(
                    "contact_row_form_block_item_label_active"
                );
            } else {
                e.target.nextElementSibling.classList.remove(
                    "contact_row_form_block_item_label_active"
                );
            }
        });
    }
};

setTimeout(() => {
    labelShift("userName");
    labelShift("userPhone");
    labelShift("userMessage");
}, 4000);

// Phone input validation
const phoneRefexp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const formBlock = document.getElementById("contact_form");
const submitBtn = document.getElementById("contact_form_submit");
const submitBtnLoader = document.querySelector(
    ".contact_row_form_block_submit_loader"
);

const contactRow = document.querySelector(".contact_row");
const formRow = document.querySelector(".contact_row_form_block_row");
// Form fields
const userName = document.getElementById("userName");
const userPhone = document.getElementById("userPhone");
const userTextArea = document.getElementById("userMessage");
// Form labels
const userNameLabel = document.getElementById("name_label");
const userPhoneLabel = document.getElementById("phone_label");
const userTextLabel = document.getElementById("review_label");

const ERRORMESSAGE1 = document.getElementById("input_errorMessage1");
const ERRORMESSAGE2 = document.getElementById("input_errorMessage2");
const ERRORMESSAGE3 = document.getElementById("input_errorMessage3");

// Submit window
const onSubmitSuccessModal = document.getElementById(
    "contact_row_form_success"
);
const onSubmitSuccessModalBall = document.getElementById(
    "contact_row_form_success_ball"
);

// Is can submit
let isUserName = false;
let isUserPhone = false;
let isUserMessage = false;
let isCanSubmit = false;

// Colors
const defaultBorderColor = "#ccc";
const defaultTextColor = "#212322";
const errorBorderColor = "#d0021b";
const errorTextColor = "#d0021b";

// Add margin if error
function toggleMargin(isAdd, childId) {
    if (isAdd) {
        formRow.children[childId].style.marginBottom = "30px";
    } else {
        formRow.children[childId].style.marginBottom = "0px";
    }
}

// Check name field
function updateName() {
    if (userName.value.length > 1) {
        userName.style.borderColor = defaultBorderColor;
        userNameLabel.style.color = defaultTextColor;
        userName.addEventListener("blur", () => {
            userName.style.borderColor = defaultBorderColor;
            userNameLabel.style.color = defaultTextColor;
        });
        toggleMargin(false, 0);
        ERRORMESSAGE1.style.display = "none";
        isCanSubmit = true;
        isUserName = true;
    } else {
        toggleMargin(true, 0);
        ERRORMESSAGE1.style.display = "block";
        userName.style.borderColor = errorBorderColor;
        userNameLabel.style.color = errorTextColor;
        isCanSubmit = false;
        isUserName = false;
    }
}

// Phone validate
function updatePhone() {
    if (userPhone.value.length > 5) {
        userPhone.style.borderColor = defaultBorderColor;
        userPhoneLabel.style.color = defaultTextColor;
        userPhone.addEventListener("blur", () => {
            userPhone.style.borderColor = defaultBorderColor;
            userPhoneLabel.style.color = defaultTextColor;
        });
        toggleMargin(false, 1);
        ERRORMESSAGE2.style.display = "none";
        isCanSubmit = true;
        isUserPhone = true;
    } else {
        toggleMargin(true, 1);
        ERRORMESSAGE2.style.display = "block";
        userPhone.style.borderColor = errorBorderColor;
        userPhoneLabel.style.color = errorTextColor;
        isCanSubmit = false;
        isUserPhone = false;
    }
}

// Check user message
function updateTextArea() {
    if (userTextArea.value.length > 4) {
        userTextArea.style.borderColor = defaultBorderColor;
        userTextLabel.style.color = defaultTextColor;

        userTextArea.addEventListener("blur", () => {
            userTextArea.style.borderColor = defaultBorderColor;
            userTextLabel.style.color = defaultTextColor;
        });
        ERRORMESSAGE3.style.display = "none";
        isCanSubmit = true;
        isUserMessage = true;
    } else {
        ERRORMESSAGE3.style.display = "block";
        userTextArea.style.borderColor = errorBorderColor;
        userTextLabel.style.color = errorTextColor;
        isCanSubmit = false;
        isUserMessage = false;
    }
}

// Submit
const submitHandler = () => {
    const isCanSubmit = isUserPhone === true && isUserMessage === true;

    const isServices =
        $("#select_name_text") !== undefined
            ? $("#select_name_text").text().trim()
            : "";
    const isServicesType =
        $("#select_type_text") !== undefined
            ? $("#select_type_text").text().trim()
            : "";

    if (isCanSubmit === true) {
        const submit = {
            userName: userName.value,
            userPhone: userPhone.value,
            userMessage: userTextArea.value,
            userServices: isServices,
            userServicesType: isServicesType,
        };

        userName.value = "";
        userPhone.value = "";
        userTextArea.value = "";

        // Reset label
        var list;
        list = document.querySelectorAll(".contact_row_form_block_item_label");
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.remove(
                "contact_row_form_block_item_label_active"
            );
        }

        if (document.querySelector(".contact_row_info_gsap")) {
            contactRow.classList.add("contact_row_hidden");

            document.querySelector(
                ".contact_row_info_gsap"
            ).style.pointerEvents = "none";
        }

        document
            .getElementById("contact_form_submit")
            .classList.add("contact_row_form_block_submit_success");

        submitBtnLoader.style.visibility = "visible";
        submitBtnLoader.style.opacity = "1";

        setTimeout(() => {
            submitBtnLoader.style.visibility = "hidden";
            submitBtnLoader.style.opacity = "0";
        }, 1400);
        // Show success window
        setTimeout(() => {
            onSubmitSuccessModal.style.visibility = "visible";
            onSubmitSuccessModal.style.opacity = "1";
        }, 2000);

        setTimeout(() => {
            submitBtn.style.animationDirection = "reverse";
        }, 2500);

        setTimeout(() => {
            document
                .getElementById("contact_form_submit")
                .classList.remove("contact_row_form_block_submit_success");

            submitBtn.style.animationDirection = "normal";
        }, 7000);

        $.ajax({
            type: "POST",
            url: "../../includes/SendMail.php",
            data: {
                submit: submit,
            },
            success: function () {
                // Clear inputs
                userName.value = "";
                userPhone.value = "";
                userTextArea.value = "";

                setTimeout(() => {
                    onSubmitSuccessModal.style.visibility = "hidden";

                    onSubmitSuccessModal.style.opacity = "0";

                    if (document.querySelector(".contact_row_info_gsap")) {
                        contactRow.classList.remove("contact_row_hidden");
                        document.querySelector(
                            ".contact_row_info_gsap"
                        ).style.pointerEvents = "visible";
                    }
                }, 5000);
            },
        });
    } else {
        !isUserName && updateName(true);
        !isUserPhone && updatePhone(true);
        !isUserPhone && updateTextArea(true);
    }
};
if (formBlock) {
    formBlock.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            userName.addEventListener("input", updateName());
            userPhone.addEventListener("input", updatePhone());
            userTextArea.addEventListener("input", updateTextArea());
            submitHandler(event);
        }
    });
}
if (submitBtn) {
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        userName.addEventListener("input", updateName());
        userPhone.addEventListener("input", updatePhone());
        userTextArea.addEventListener("input", updateTextArea());
        submitHandler(event);
    });
}
