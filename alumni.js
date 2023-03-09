fetch('https://script.google.com/macros/s/AKfycbzG452D84gGiqAOwElciVn1YrO0mhq2rNJJupXYIbnua5sjyC8FRFD0AaJL-dfanAgV/exec')
                    .then(res => res.json())
                     .then(data => {
                        let tr = data.content.reduce((prev, cur) => {
                            let td = cur.map(e => `<td>${e}</td>`)
                            return prev + `<tr>${td.join("")}</tr>`
                        }, "\r")
                        document.querySelector("table").innerHTML = tr;
                        
                    });

                    function myFunction() {
                        
                        var input, filter, table, tr, td, i, txtValue;
                        input = document.getElementById("myInput");
                        filter = input.value.toUpperCase();
                        table = document.getElementById("myTable");
                        tr = table.getElementsByTagName("tr");
                      
                        
                        for (i = 0; i < tr.length; i++) {
                          td = tr[i].getElementsByTagName("td")[1];
                          if (td) {
                            txtValue = td.textContent || td.innerText;
                            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                              tr[i].style.display = "";
                            } else {
                              tr[i].style.display = "none";
                            }
                          }
                        }
                      }