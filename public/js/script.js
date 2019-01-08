$('.ui.checkbox')
        .checkbox()
    ;


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAB56lSgGwqxrFYmRBFBU2Lt0FlHcTKcVs",
        authDomain: "aplikasi-mico.firebaseapp.com",
        databaseURL: "https://aplikasi-mico.firebaseio.com",
        projectId: "aplikasi-mico",
        storageBucket: "aplikasi-mico.appspot.com",
        messagingSenderId: "125777822204"
    };
    firebase.initializeApp(config);
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var login_btn = document.getElementById('login');
    var reg_btn = document.getElementById('register');
    var logout_btn = document.getElementById('logout');
    var errMes = document.getElementById('errMes');
    
    
    
           
            var auth = firebase.auth();

            function regist_act(){
                auth.createUserWithEmailAndPassword(email.value, password.value)
                    .then(function(data){
                        return data.updateProfile({displayName: document.getElementById("nama").value , 
                            phoneNumber: document.getElementById("noHp").value
                        }).then(function() {
                            // Update successful.
                            alert("Data Sukses")
                            
                            location.replace("login.html")
                        }).catch(function(error) {
                            // An error happened.
                            alert("Data Gagal")
                        });
                      

                    })
                    .catch(function(err){
                        
                        console.log(err);

                    })
//                var cetak = document.getElementById('text');
//                cetak.innerHTML = "email adalah "+ email.value;
            }
            function login_act(){
                auth.signInWithEmailAndPassword(email.value, password.value)
                    .then(function(data){
                        console.log("-- Log in Berhasil --");
                        console.log(data);
                        location.replace("index.html")
                    })
                    .catch(function(err){
                        errMes.classList.remove("hidden")

                    })
            }
            function logout_act(){
                firebase.auth().signOut().then(function() {
                    location.replace("login.html")
                }).catch(function(error) {
                // An error happened.
                });
            }

      

              
              
        