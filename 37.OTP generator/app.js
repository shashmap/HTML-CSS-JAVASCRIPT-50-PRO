let generateOTP = () => {
    
    const otpLength = 6;
  
    
    const otp = Math.floor(100000 + Math.random() * 900000);
  
    
    document.getElementById("otpdisplay").innerText = `${otp}`;
  };
  
  document.getElementById("btn").addEventListener("click", generateOTP);
  window.addEventListener("load", generateOTP);