axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const btnSubmit = document.getElementById("btn-submit");
if (btnSubmit) {
    document.getElementById("btn-submit").addEventListener("click", function (e) {
        e.preventDefault();
        hideErrorRibbon();
        const payload = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        }
        const project = document.getElementById('project_id').value;
        let url = process.env.MIX_CONTACT_API_URL;
        let action = "contact_mermaid";
        if (typeof project !== "undefined" && project !== "") {
            Object.assign(payload, { project });
            url = process.env.MIX_CONTACT_PROJECT_API_URL;
            action = "contact_project_admins";
        }

        try {
            return grecaptcha.ready(function () {
                grecaptcha.execute(process.env.MIX_RECAPTCHA_SITE_KEY, { action }).then(function (token) {
                    console.log({ token });
                    Object.assign(payload, { recaptcha: token });

                    console.log({ payload });
                    return axios.post(url, payload).then(res => {
                        document.getElementById('contact-form').submit();
                        return res;
                    })
                        .catch(err => {
                            console.log({ err });
                            let err_msg = "";
                            const data = err.response.data;
                            if (err.response) {
                                if (data.name?.length) err_msg += data.name.map(e => "Name : " + e).join("<br>") + "<br>";
                                if (data.email?.length) err_msg += data.email.map(e => "Email : " + e).join("<br>") + "<br>";
                                if (data.subject?.length) err_msg += data.subject.map(e => "Subject : " + e).join("<br>") + "<br>";
                                if (data.message?.length) err_msg += data.message.map(e => "Message : " + e).join("<br>") + "<br>";
                                if (data.project?.length) err_msg += data.project.map(e => "Project : " + e).join("<br>") + "<br>";
                                if (data.recaptcha?.length) err_msg += data.recaptcha.map(e => "reCAPTCHA : " + e).join("<br>") + "<br>";
                            }
                            if (err_msg !== "") {
                                showErrorRibbon(err_msg);
                            }
                        })

                }).catch(err => showErrorRibbon("Token expired, please reload page"));
            });
        } catch (err) {
            console.log({ err });
        }
    });
  }

  function hideErrorRibbon() {
      document.getElementById('error-ribbon').innerHTML = "";
      document.getElementById('error-ribbon').style.display = "none";
  }

  function showErrorRibbon(message) {
      document.getElementById('error-ribbon').innerHTML = message;
      document.getElementById('error-ribbon').style.display = "block";
  }