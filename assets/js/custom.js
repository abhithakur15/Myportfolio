

// add class on scrool in header menu start
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
        document.querySelector('header').classList.add('sticky', 'fadeInDown', 'animated');
    } else {
        document.querySelector('header').classList.remove('sticky', 'fadeInDown', 'animated');
    }
});


     
	// FOR YEAR IN FOOTER
    const year = document.querySelector('#current-year')
    year.innerHTML = new Date().getFullYear()

    $(window).on('load', function () {
        $(".set-loder").fadeOut(1750);
        });

        document.addEventListener('DOMContentLoaded', () => {
            const activePage = localStorage.getItem('activePage');
            
            if (activePage) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    if (link.getAttribute('data-page') === activePage) {
                        link.classList.add('active');
                    }
                });
            }
        
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    localStorage.setItem('activePage', link.getAttribute('data-page'));
                });
            });
        });
        