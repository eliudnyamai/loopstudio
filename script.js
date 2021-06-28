function showMenu()
{
    var navigationLinks = document.getElementById('navigation-links');
    var navigation = document.getElementById('navigation');
    var toggleButton=document.getElementById('toggle-button');
    if (navigationLinks.style.display == 'none') {
        toggleButton.innerHTML="<img src='images/icon-close.svg' alt='' srcset=''>"
        navigationLinks.style.display = 'block';
        navigation.style.backgroundColor='black';
       
    } else {
        navigationLinks.style.display = 'none';
        navigation.style.backgroundColor='';
        toggleButton.innerHTML="<img src='images/icon-hamburger.svg' alt='' srcset=''>"
    }
}