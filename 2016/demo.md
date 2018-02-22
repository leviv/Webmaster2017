/* ===============================
    Custom CSS
    By: Levi Villarreal
    For: 2016 TSA Webmaster Competition
    Completed: June 2016
    Coded w/ love <3
=============================== */


/* ===============================
    Nav
=============================== */

div.switcher {
    width: 170px;
    height: 90px;
    background: #65c4ff;
    -webkit-clip-path: polygon(0 0, 100% 0, 59% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 59% 100%, 0% 100%);
    position: fixed;
    top: 0;
    left: 0;
    display: inline-block;
    z-index: 999999999999999999999999999999999999999999999999;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
}

@media(max-width:768px) {
    div.switcher {
        height: 61px;
        width: 130px;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
}

div.switcher:hover {
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
    background: #009dff;
}

.switcher h2 {
    color: white;
    padding: 5px;
    margin-left: 5%;
    margin-top: 12%;
    font-size: 28px;
    margin-right: 28%;
    text-align: center;
    transform: skewX(170deg);
    -webkit-transform: skewX(170deg);
    -moz-transform: skewX(170deg);
    -o-transform: skewX(170deg);
    -ms-transform: skewX(170deg);
    background: none;
}

.secondary-icon {
    width: 100%;
    height: 100%;
}

ul.navbar-nav {
    display: inline-block;
    float: none;
}

.navbar .navbar-collapse {
    text-align: center;
}

#navbar li {
    color: #000;
    padding: 0 30px;
    text-transform: uppercase;
    font-size: 22px;
}

@media(max-width:1360px) {
    #navbar li {
        padding: 0 15px;
        font-size: 18px;
    }
}

@media(min-width:1360px) {
    .header-logo img {
        transition: all .5s ease-in-out;
        height: 300px !important;
        width: 300px !important;
        margin-top:15%;
        margin-bottom: 25%;
    }
}

@media(max-width:1050px) {
    .header-logo img {
        display: none;
    }

    #navbar li {
        padding: 0 10px !important;
        font-size: 18px;
    }

    #navbar ul {
        padding-left: 50px !important;
    }
}

@media(max-width:768px) {

    #navbar ul {
        padding-left: 0 !important;
    }

    .navbar {
        background: #fff !important;
    }

    .navbar-custom h2 a {
        color: #000000 !important;
    }

    #navbar ul li {
        padding: 10px 0 !important;
    }

    #navbar ul li.link5 {
        padding: 0 !important;
    }
}

.header-logo {
    transition: ease-in-out;
    -webkit-transition: background .4s ease-in-out,padding .4s ease-in-out;
    -moz-transition: background .4s ease-in-out,padding .4s ease-in-out;
    -o-transition: background .4s ease-in-out,padding .4s ease-in-out;
}

.header-logo img {
    transition: all .5s ease-in-out;
    height: 150px;
    width: 150px;
    margin-top:15%;
    margin-bottom: 25%;
}

.link-5 {
    display: none !important;
}

.logo-collapse img{
    transition: all .5s ease-in-out;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -ms-transition: all 1s ease-in-out;
    height: 100px !important;
    width: 100px !important;
    margin: 0% 50%;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
}

@media(max-width:767px) {
    .logo-collapse img, .link5 img{
        display: none;
    }

    .tsa-hero-content img {
        display: none;
    }
}

#navbar {
    top: 0;
    width: 100%;
    z-index: 9999999;
}

#navbar ul {
    margin: 0 auto;
    padding: 5px 0;
}

li a {
    font-size: 20px;
    color: #000;
}

.navbar-custom h2 a {
    color: #000000;
    text-decoration: underline;
    padding: 5px;
}

.top-nav-collapse h2 a {
    color: #000000;
}

ul {
    text-align: center;
}

@media(max-width:1205px) {
    #navbar li {
        color: #000;
        padding: 0 20px;
        font-size: 25px;
    }
}

@media(min-width:767px) {
    .navbar {
        background: 0 0;
        height: 70px;
        transition: ease-in-out;
        -webkit-transition: background .4s ease-in-out,padding .4s ease-in-out;
        -moz-transition: background .4s ease-in-out,padding .4s ease-in-out;
        -o-transition: background .4s ease-in-out,padding .4s ease-in-out;
        padding: 20px 0;
    }
}

.top-nav-collapse {
    background: #ffffff !important;
}

/* Hamburge Icon transitions */
.c-hamburger {
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 96px;
    height: 60px;
    font-size: 0;
    text-indent: -9999px;
    appearance: none;
    box-shadow: none;
    border-radius: none;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
}

.c-hamburger:focus {
    outline: none;
}

.c-hamburger span {
    display: block;
    position: absolute;
    top: 35px;
    left: 18px;
    right: 18px;
    height: 2px;
    background: #000000;
    width: 30%;
}

.c-hamburger span::before,
.c-hamburger span::after {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000000;
    content: "";
}

.c-hamburger span::before {
    top: -8px;
}

.c-hamburger span::after {
    bottom: -8px;
}

.c-hamburger--htx {
    background-color: rgba(0, 0, 0, 0);
}

.c-hamburger--htx span {
    transition: background 0s 0.3s;
}

.c-hamburger--htx span::before,
.c-hamburger--htx span::after {
    transition-duration: 0.3s, 0.3s;
    transition-delay: 0.3s, 0s;
}

.c-hamburger--htx span::before {
    transition-property: top, transform;
}

.c-hamburger--htx span::after {
    transition-property: bottom, transform;
}

/* active state, i.e. menu open */
.c-hamburger--htx.is-active {
    background-color: rgba(0, 0, 0, 0);
}

.c-hamburger--htx.is-active span {
    background: none;
}

.c-hamburger--htx.is-active span::before {
    top: 0;
    transform: rotate(45deg);
}

.c-hamburger--htx.is-active span::after {
    bottom: 0;
    transform: rotate(-45deg);
}

.c-hamburger--htx.is-active span::before,
.c-hamburger--htx.is-active span::after {
    transition-delay: 0s, 0.3s;
}
