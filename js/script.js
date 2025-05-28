// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            
            // Mudança do ícone
            const icon = menuToggle.querySelector('i');
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fechar menu ao clicar em um link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Fechar menu ao redimensionar a tela
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // FAQ 
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const icon = this.querySelector('.accordion-icon i');
            
            // Fechar outros itens
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherItem = otherHeader.parentElement;
                    const otherIcon = otherHeader.querySelector('.accordion-icon i');
                    otherItem.classList.remove('active');
                    otherIcon.classList.remove('fa-times');
                    otherIcon.classList.add('fa-plus');
                }
            });
            
            // Toggle do item atual
            accordionItem.classList.toggle('active');
            
            if (accordionItem.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-plus');
            }
        });
    });
    
    // Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Limpar mensagens de erro anteriores
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.textContent = '');
            
            // Validação
            let isValid = true;
            
            // Nome
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('name-error').textContent = 'Nome é obrigatório';
                isValid = false;
            }
            
            // Email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                document.getElementById('email-error').textContent = 'E-mail é obrigatório';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                document.getElementById('email-error').textContent = 'E-mail inválido';
                isValid = false;
            }
            
            // Mensagem
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                document.getElementById('message-error').textContent = 'Mensagem é obrigatória';
                isValid = false;
            }
            
            if (isValid) {
                // Simular envio
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
            }
        });
    }
    
    // Data atual na página do clima
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        currentDateElement.textContent = now.toLocaleDateString('pt-BR', options);
    }
    
    // Smooth scroll para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada dos cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar cards para animação
    const cards = document.querySelectorAll('.impact-card, .solution-card, .objective-card, .prevention-card, .team-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Resetar mensagens de erro
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(message => {
                message.textContent = '';
            });
            
            // Obter valores dos campos
            const nome = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Validar nome
            if (nome === '') {
                document.getElementById('name-error').textContent = 'Por favor, informe seu nome';
                isValid = false;
            }
            
            // Validar email
            if (email === '') {
                document.getElementById('email-error').textContent = 'Por favor, informe seu e-mail';
                isValid = false;
            } else if (!isValidEmail(email)) {
                document.getElementById('email-error').textContent = 'Por favor, informe um e-mail válido';
                isValid = false;
            }
            
            // Validar mensagem
            if (mensagem === '') {
                document.getElementById('message-error').textContent = 'Por favor, escreva sua mensagem';
                isValid = false;
            }
            
            // Se tudo estiver válido, enviar o formulário
            if (isValid) {
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                successMessage.style.backgroundColor = '#d4edda';
                successMessage.style.color = '#155724';
                successMessage.style.padding = '15px';
                successMessage.style.borderRadius = '4px';
                successMessage.style.marginBottom = '20px';
                
                contactForm.parentNode.insertBefore(successMessage, contactForm);
                contactForm.reset();
                
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
        
        // Validação em tempo real
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                const errorElement = document.getElementById(`${this.id}-error`);
                if (errorElement) {
                    errorElement.textContent = '';
                }
            });
        });
    }

    // Função para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função para validar campos individuais
    function validateField(field) {
        const fieldId = field.id;
        const fieldValue = field.value.trim();
        const errorElement = document.getElementById(`${fieldId}-error`);
        
        if (!errorElement) return;
        
        switch (fieldId) {
            case 'name':
                if (fieldValue === '') {
                    errorElement.textContent = 'Por favor, informe seu nome';
                }
                break;
            case 'email':
                if (fieldValue === '') {
                    errorElement.textContent = 'Por favor, informe seu e-mail';
                } else if (!isValidEmail(fieldValue)) {
                    errorElement.textContent = 'Por favor, informe um e-mail válido';
                }
                break;
            case 'message':
                if (fieldValue === '') {
                    errorElement.textContent = 'Por favor, escreva sua mensagem';
                }
                break;
        }
    }
});

