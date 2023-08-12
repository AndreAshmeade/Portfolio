$(document).ready(function () {
  $("#contact").submit(function (e) {
    const form = document.querySelector('form[id="contact"]');
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = "Summary: " + form.elements["message"].value;
    e.preventDefault();
    var data = {
      service_id: "service_5wulkpo",
      template_id: "template_xr97ckj",
      user_id: "_vr-iwRdZVRCg6G2l",
      template_params: {
        from_name: name,
        to_name: email,
        message: message,
      },
    };
    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done(function () {
        alert("Your mail is sent!");
      })
      .fail(function (error) {
        alert("Oops… " + JSON.stringify(error));
      });
  });
});
