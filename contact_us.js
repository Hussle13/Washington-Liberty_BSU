const scriptURL = 'https://script.google.com/macros/s/AKfycbyULcyN8UENwsumYm74oOxr8bVCp5E8bV0geXTm9BWNRnfVaojYmSJXPCLffpgcA_oqlA/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us! We Will Contact You Soon."))
                .catch(error => console.error('Error!', error.message))
            })