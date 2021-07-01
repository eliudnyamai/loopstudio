var navigationLinks = document.getElementById('navigation-links');
var navigation = document.getElementById('navigation');
var toggleButton=document.getElementById('toggle-button');
function showMenu()
{
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

function changeDisplay(){
   if (window.innerWidth>1024) {
    navigation.style.backgroundColor='';   
    navigationLinks.style.display = 'flex';
    toggleButton.innerHTML="<img src='images/icon-hamburger.svg' alt='' srcset=''>"
   }
   else if(navigationLinks.style.display == 'flex'){  
    navigationLinks.style.display = 'none';
    navigation.style.backgroundColor='';
    toggleButton.innerHTML="<img src='images/icon-hamburger.svg' alt='' srcset=''>"
   }
}