const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.image');
    let width = 1100;
    let slidenumber = 1;

    const nextslide = ()=>{
      slider.style.transform = `translateX(${slidenumber * -width}px)`;
        slidenumber+=1;
    }

    const firstslide = () =>{
      slider.style.transform = `translateX(0px)`;
        slidenumber = 1;

    }

    const prevslide = ()=>{
      slidenumber-=1;
        slider.style.transform = `translateX(${slidenumber * -width + width}px)`;
        
    }

    const lastslide = ()=>{
      slider.style.transform = `translateX(${(images.length-1)*-width}px)`;
      slidenumber = images.length;
    }


    right.addEventListener('click',()=>{
     slidenumber<images.length ?nextslide():firstslide();
        
      }
     )

    left.addEventListener('click',()=>{
      slidenumber>1?prevslide():lastslide();
     })