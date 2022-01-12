$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

})

function openPage() {
    var x = document.getElementById("search").value;

    if (x === "Agent Sai SrinivasaAthreya" || x === "agent sai srinivasa athreya") {
        window.location.href = "/telugu/video/Agent-Sai-Srinivasa-Athreya.html";
        document.title = "Agent Sai Srinivasa Athreya";
    }

    if (x === "annabelle sethupathi" || x === "Annabelle sethupathi") {
        window.location.href = "/telugu/video/annabelle-sethupathi.html"
        document.title = "Annabelle Sethupathi";
    }

    if (x === "Alludu adhurs" || x === "alludu adhurs") {
        window.location.href = "/telugu/video/Alludu-Adhurs.html"
        document.title = "Alludu Adhurs";
    }

    if (x === "baahubail 2" || x === "Baahubail 2") {
        window.location.href = "/telugu/video/baahubail-2.html"
        document.title = "Baahubail 2";
    }

    if (x === "baahubail" || x === "Baahubail") {
        window.location.href = "/telugu/video/baahubail.html"
        document.title = "Baahubail";
    }

    if (x === "Bheeshma" || x === "bheeshma") {
        window.location.href = "/telugu/video/Bheeshma.html"
        document.title = "Bheeshma";
    }

    if (x === "bhuj" || x === "Bhuj") {
        window.location.href = "/telugu/video/bhuj.html"
        document.title = "Bhuj";
    }

    if (x === "Black widow" || x === "black widow") {
        window.location.href = "/telugu/video/black-widow.html"
        document.title = "Black widow";
    }

    if (x === "Chitralahari" || x === "chitralahari") {
        window.location.href = "/telugu/video/Chitralahari.html"
        document.title = "Chitralahari";
    }

    if (x === "Deyyam" || x === "deyyam") {
        window.location.href = "/telugu/video/deyyam.html"
        document.title = "Deyyam";
    }

    if (x === "dial 100" || x === "Dial 100") {
        window.location.href = "/telugu/video/dial-100.html"
        document.title = "dial-100";
    }

    if (x === "Dj duvvada jagannatham" || x === "dj duvvada jagannatham") {
        window.location.href = "/telugu/video/DJ-Duvvada-Jagannatham.html"
        document.title = "DJ-Duvvada-Jagannatham";
    }

    if (x === "eega" || x === "Eega") {
        window.location.href = "/telugu/video/Eega.html"
        document.title = "Eega";
    }

    if (x === "f2" || x === "F2") {
        window.location.href = "/telugu/video/f2.html"
        document.title = "F2";
    }

    if (x === "gaali sampath" || x === "Gaali sampath") {
        window.location.href = "/telugu/video/Gaali-Sampath.html"
        document.title = "Alludu Adhurs";
    }

    if (x === "geetha govindom" || x === "Geetha govindom") {
        window.location.href = "/telugu/video/geetha-govindom.html"
        document.title = "Geetha Govindom";
    }

    if (x === "George reddy" || x === "george reddy") {
        window.location.href = "/telugu/video/george-reddy.html"
        document.title = "George Reddy";
    }

    if (x === "goodachari" || x === "Goodachari") {
        window.location.href = "/telugu/video/Goodachari.html"
        document.title = "Goodachari";
    }

    if (x === "hit" || x === "Hit") {
        window.location.href = "/telugu/video/hit.html"
        document.title = "Hit";
    }

    if (x === "Hyper" || x === "hyper") {
        window.location.href = "/telugu/video/hyper.html"
        document.title = "Hyper";
    }

    if (x === "Ichata vahanamulu niluparadu" || x === "ichata vahanamulu niluparadu") {
        window.location.href = "/telugu/video/Ichata-Vahanamulu-Niluparadu.html"
        document.title = "Ichata Vahanamulu Niluparadu";
    }

    if (x === "Inkokkadu" || x === "inkokkadu") {
        window.location.href = "/telugu/video/Inkokkadu.html"
        document.title = "Inkokkadu";
    }

    if (x === "Ishq not a love story" || x === "ishq not-a love story") {
        window.location.href = "/telugu/video/Ishq-Not-A-Love-Story.html"
        document.title = "Ishq Not A Love Story";
    }

    if (x === "jathi ratnalu" || x === "Jathi ratnalu") {
        window.location.href = "/telugu/video/jathi-ratnalu.html"
        document.title = "Jathi Ratnalu";
    }

    if (x === "kanabadutaledu" || x === "Kanabadutaledu") {
        window.location.href = "/telugu/video/kanabadutaledu.html"
        document.title = "kanabadutaledu";
    }

    if (x === "Kanulu kanulanu dochayante" || x === "kanulu kanulanu dochayante") {
        window.location.href = "/telugu/video/Kanulu-Kanulanu-Dochayante.html"
        document.title = "Kanulu Kanulanu Dochayante";
    }

    if (x === "kavacham" || x === "Kavacham") {
        window.location.href = "/telugu/video/kavacham.html"
        document.title = "Kavacham";
    }

    if (x === "Kgf" || x === "kgf") {
        window.location.href = "/telugu/video/kgf.html"
        document.title = "KGF";
    }

    if (x === "krack" || x === "Krack") {
        window.location.href = "/telugu/video/krack.html"
        document.title = "Krack";
    }

    if (x === "Luca" || x === "luca") {
        window.location.href = "/telugu/video/luca.html"
        document.title = "Luca";
    }

    if (x === "maestro" || x === "Maestro") {
        window.location.href = "/telugu/video/maestro.html"
        document.title = "Maestro";
    }

    if (x === "marakathamani" || x === "Marakathamani") {
        window.location.href = "/telugu/video/Marakathamani.html"
        document.title = "Marakathamani";
    }

    if (x === "Mayuri" || x === "mayuri") {
        window.location.href = "/telugu/video/mayuri.html"
        document.title = "Mayuri";
    }

    if (x === "mojin the treasure valley" || x === "Mojin the treasure valley") {
        window.location.href = "/telugu/video/Mojin-The-Treasure-Valley.html"
        document.title = "Mojin The Treasure Valley";
    }

    if (x === "Naduvan umpire" || x === "naduvan umpire") {
        window.location.href = "/telugu/video/naduvan-umpire.html"
        document.title = "Naduvan Umpire";
    }

    if (x === "Narappa" || x === "narappa") {
        window.location.href = "/telugu/video/narappa.html"
        document.title = "Narappa";
    }

    if (x === "Nenu sailaja" || x === "nenu sailaja") {
        window.location.href = "/telugu/video/Nenu-Sailaja.html"
        document.title = "Nenu Sailaja";
    }    

    if (x === "orey baammardhi" || x === "Orey baammardhi") {
        window.location.href = "/telugu/video/Orey-Baammardhi.html"
        document.title = "Orey Baammardhi";
    }

    if (x === "Paagal" || x === "paagal") {
        window.location.href = "/telugu/video/paagal.html"
        document.title = "Paagal";
    }

    if (x === "parinayam" || x === "Parinayam") {
        window.location.href = "/telugu/video/Parinayam.html"
        document.title = "Parinayam";
    }

    if (x === "prati roju pandage" || x === "Prati roju pandage") {
        window.location.href = "/telugu/video/Prati-Roju-Pandage.html"
        document.title = "Prati Roju Pandage";
    }

    if (x === "raahu" || x === "Raahu") {
        window.location.href = "/telugu/video/Raahu.html"
        document.title = "Raahu";
    }

    if (x === "Race gurram" || x === "race gurram") {
        window.location.href = "/telugu/video/Race-Gurram.html"
        document.title = "Race Gurram";
    }

    if (x === "radio madhav" || x === "Radio madhav") {
        window.location.href = "/telugu/video/radio-madhav.html"
        document.title = "Radio Madhav";
    }

    if (x === "Raja raja chora" || x === "raja raja chora") {
        window.location.href = "/telugu/video/raja-raja-chora.html"
        document.title = "Raja Raja Chora";
    }

    if (x === "raya last dagon" || x === "Raya last dagon") {
        window.location.href = "/telugu/video/raya-last-dagon.html"
        document.title = "Raya Last Dagon";
    }

    if (x === "So satyamurthy" || x === "so satyamurthy") {
        window.location.href = "/telugu/video/SO-Satyamurthy.html"
        document.title = "SO Satyamurthy";
    }

    if (x === "Spyder" || x === "spyder") {
        window.location.href = "/telugu/video/spyder.html"
        document.title = "Spyder";
    }

    if (x === "Sr kalyanamandapam" || x === "sr kalyanamandapam") {
        window.location.href = "/telugu/video/SR-Kalyanamandapam.html"
        document.title = "SR Kalyanamandapam";
    }

    if (x === "subramanyamg for sale" || x === "Subramanyam for sale") {
        window.location.href = "/telugu/video/Subramanyam-For-Sale.html"
        document.title = "Subramanyam For Sale";
    }

    if (x === "Taxiwala" || x === "taxiwala") {
        window.location.href = "/telugu/video/Taxiwala.html"
        document.title = "Taxiwala";
    }

    if (x === "the sucides quard" || x === "The sucide squard") {
        window.location.href = "/telugu/video/the-sucide-squard.html"
        document.title = "The Sucide Squard";
    }

    if (x === "The tomorrow war" || x === "the tomorrow war") {
        window.location.href = "/telugu/video/the-tomorrow-war.html"
        document.title = "The Tomorrow War";
    }

    if (x === "tom and jerry" || x === "Tom and jerry") {
        window.location.href = "/telugu/video/tom-jerry.html"
        document.title = "Tom And Jerry";
    }

    if (x === "Tuck jagadish" || x === "tuck jagadish") {
        window.location.href = "/telugu/video/tuck-jagadish.html"
        document.title = "Tuck Jagadish";
    }

    if (x === "tughlaq durbar" || x === "Tughlaq durbar") {
        window.location.href = "/telugu/video/Tughlaq-Durbar.html"
        document.title = "Tughlaq Durbar";
    }

    if (x === "v" || x === "V") {
        window.location.href = "/telugu/video/V.html"
        document.title = "V";
    }

    
    if (x === "Vakeel saab" || x === "vakeel saab") {
        window.location.href = "/telugu/video/vakeel-saab.html"
        document.title = "Vakeel Saab";
    }

    if (x === "Vivaha bhojanambu" || x === "vivaha bhojanambu") {
        window.location.href = "/telugu/video/Vivaha-Bhojanambu.html"
        document.title = "Vivaha Bhojanambu";
    }

    if (x === "war" || x === "War") {
        window.location.href = "/telugu/video/war.html"
        document.title = "War";
    }

    if (x === "Zombie reddy" || x === "zombie reddy") {
        window.location.href = "/telugu/video/zombie-reddy.html"
        document.title = "Zombie Reddy";
    }

}

