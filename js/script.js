//menginput nama user
document.addEventListener("DOMContentLoaded", function() {
    function replaceName() {
        let name = prompt("halo, siapakah nama anda");
        document.getElementById("name").innerHTML = name;
        console.log(name);
    }
    
    replaceName();
});

function validateForm() {
    // Ambil nilai dari form input
    var name = document.getElementById("namo").value;
    var birthDate = document.getElementById("birth-date").value;
    var genderElements = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById("message").value;

    console.log(name)
    console.log(birthDate)
    console.log(genderElements ? genderElements.value : '')
    console.log(message)

    // Periksa apakah semua input sudah diisi
    if (name && birthDate && genderElements && message) {
        var gender = genderElements.value;
        // Tampilkan nilai pada elemen span
        document.getElementById("display-name").textContent = name;
        document.getElementById("display-birth-date").textContent = birthDate;
        document.getElementById("display-gender").textContent = gender === 'male' ? 'Laki-laki' : 'Perempuan';
        document.getElementById("display-message").textContent = message;
    } else {
        alert('Tolong form diisi');
    }
}

menubar = document.querySelector(".menubar");
menubar.onclick = function(){
    navlinks = document.querySelector(".nav-links")
    navlinks.classlist.toggle("active");
}
