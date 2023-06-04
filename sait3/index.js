function toggleContent(element) {
    let content = element.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  }

  let form = document.getElementById('contact-form');
  let successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = form.elements['name'].value;
    let email = form.elements['email'].value;
    let message = form.elements['message'].value;

    
    form.elements['name'].value = '';
    form.elements['email'].value = '';
    form.elements['message'].value = '';

   
    successMessage.style.display = 'block';

   
    setTimeout(function() {
      successMessage.style.display = 'none';
    }, 3000);
  });
  let header = document.querySelector('header');
  let blogTitle = document.getElementById('blog-title');

  
  blogTitle.textContent = 'Мой обновленный личный блог';


  header.classList.add('header-styling');

  let footer = document.querySelector('footer');
  let footerContent = document.getElementById('footer-content');

  footerContent.textContent = '© 2023 Мой личный блог. Все права защищены.';



  