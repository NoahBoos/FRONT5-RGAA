const menuButton = document.getElementById('menu-button');
        const dropdownMenu = document.getElementById('dropdown-menu');

        menuButton.addEventListener('click', () => {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
            dropdownMenu.classList.toggle('hidden');
        });

        const dropdownLinks = document.querySelectorAll('#dropdown-menu > li > a');
        const allDropdowns = document.querySelectorAll('.dropdown');

        dropdownLinks.forEach(link => {
            link.addEventListener('focus', () => {
                const subMenu = link.nextElementSibling;
                if (subMenu && subMenu.classList.contains('dropdown')) {
                    subMenu.classList.remove('hidden');
                }
            });

            link.addEventListener('blur', () => {
                const subMenu = link.nextElementSibling;
                if (subMenu && subMenu.classList.contains('dropdown')) {
                    // Ajout d'un délai pour permettre la navigation avec Tab
                    setTimeout(() => {
                        if (!subMenu.contains(document.activeElement)) {
                            subMenu.classList.add('hidden');
                        }
                    }, 100);
                }
            });
        });

        
        allDropdowns.forEach(subMenu => {
            const lastLink = subMenu.querySelector('a:last-of-type');
            if (lastLink) {
                lastLink.addEventListener('blur', () => {
                    setTimeout(() => {
                        if (!subMenu.contains(document.activeElement)) {
                            subMenu.classList.add('hidden');
                        }
                    }, 100);
                });
            }
        });

        allDropdowns.forEach(subMenu => {
            subMenu.addEventListener('mouseover', () => {
                subMenu.classList.remove('hidden');
            });

            subMenu.addEventListener('mouseout', () => {
                subMenu.classList.add('hidden');
            });
        });

        const dropdownItems = document.querySelectorAll('#dropdown-menu > li');

        dropdownItems.forEach(item => {
            const subMenu = item.querySelector('.dropdown');

            if (subMenu) {
                item.addEventListener('mouseenter', () => {
                    subMenu.classList.remove('hidden');
                });

                item.addEventListener('mouseleave', () => {
                    subMenu.classList.add('hidden');
                });
            }
        });

        document.addEventListener('click', (event) => {
            const isClickInsideMenu = menuButton.contains(event.target) || dropdownMenu.contains(event.target);
            if (!isClickInsideMenu) {
                dropdownMenu.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });