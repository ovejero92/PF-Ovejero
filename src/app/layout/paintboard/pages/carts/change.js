document.getElementById('applyStylesButton').addEventListener('click', function() {
    const bgColor = document.getElementById('bgColor').value;
    const fontFamily = document.getElementById('fontFamily').value;
    const boxShadowValue = document.getElementById('boxShadow').value;
    const buttonColor = document.getElementById('buttonColor').value;
    const buttonSize = document.getElementById('buttonSize').value + 'px';
  
    const root = document.documentElement;
    
  
    root.style.setProperty('--card-bg-color', bgColor);
    root.style.setProperty('--card-font-family', fontFamily);
    root.style.setProperty('--card-box-shadow', `0px 0px ${boxShadowValue}px rgba(0, 0, 0, 0.5)`);
    root.style.setProperty('--button-bg-color', buttonColor);
    root.style.setProperty('--button-font-size', buttonSize);
  
    const fileInput = document.getElementById('imageUpload');
    const cardImage = document.getElementById('cardImage');
  
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        cardImage.src = e.target.result;
        cardImage.style.display = 'block';
      }
      reader.readAsDataURL(fileInput.files[0]);
    }
  });
  