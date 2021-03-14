class slideController {
    constructor(initialSlides, containterSelector, nextSelector, prevSelctor) {
      this.slideData = [];
      this.displayedIndex = 0;
      this.renderedSlides = [];
      this.slideContainer = document.querySelector(containterSelector);
  
      if(!this.slideContainer) {
        throw "Invalid Selector: " + containterSelector;
      }
  
      if(Array.isArray(initialSlides) && initialSlides.length > 0) {
        this.addManySlides(initialSlides);
        this.showSlide(0);
      }
  
    //   document
    //   .querySelector(prevSelctor)
    //   .addEventListener('click', (e) => this.prevSlide());
      document
      .querySelector(prevSelctor)
      .addEventListener('click', (e) => {
        e.target.parentNode.querySelector("figure").classList.add("prev-anim");
        this.prevSlide()
      });
  
    //   document
    //   .querySelector(nextSelector)
    //   .addEventListener('click', (e) => this.nextSlide());
    // }

    document
    .querySelector(nextSelector)
    .addEventListener('click', (e) => {
        e.target.parentNode.querySelector("figure").classList.add("next-anim");
        this.nextSlide()
    });
  }
  
    addSlide(slide) {
      this.slideData.push(slide);
      this.renderSlide(slide);
    }
  
    addManySlides(slideArray) {
        for(slide of slideArray) {
          this.addSlide(slide);
        }
    }
  
    renderSlide(slide) {
      let domString = `<figure class="slideImage" style="display:none">
          <img src="${slide.url}" />
          <figcaption class="caption">${slide.caption}</figcaption>
          </figure>`;
      
      let slideNode = document.createRange().createContextualFragment(domString)
        .firstChild;
      
      this.renderedSlides.push(slideNode);
      this.slideContainer.append(slideNode);
    }
  
    showSlide(slideNumber) {
      //debugger;
      this.renderedSlides[this.displayedIndex].style.display = 'none';
      this.renderedSlides[slideNumber].style.display = 'block';
      this.displayedIndex = slideNumber;
    }
    
    //   showSlide(slideNumber, action) {
    //   //debugger;
    //   this.renderedSlides[this.displayedIndex].style.display = 'none';
    //   this.renderedSlides[slideNumber].style.display = 'block';
    //   // action === "next" ? this.renderedSlides[slideNumber].classList.add("next-anim") : "";
    //   console.log(this.renderedSlides[slideNumber]);
    //   this.displayedIndex = slideNumber;
    // }
  
    nextSlide() {
      let nextSlide = this.displayedIndex + 1;
      if(nextSlide > this.renderedSlides.length - 1) {
        nextSlide = 0;
      }
      // nextSlide.classList.add("next-anim");
      this.showSlide(nextSlide);
    //   this.showSlide(nextSlide, "next");
    }
  
    prevSlide() {
      let prevSlide = this.displayedIndex - 1;
      if(prevSlide < 0) {
        prevSlide = this.renderedSlides.length - 1;
      }
      this.showSlide(prevSlide);
    }
  
  }
  
  controller = new slideController([], '.slide-view', '.next', '.prev');
  controller.addSlide({
    url: 'https://loremflickr.com/320/240/cat',
    caption: "Cat Picture"
  })
  controller.addSlide({
    url: 'https://loremflickr.com/320/240/dog',
    caption: "Dog Picture"
  })
  controller.showSlide(0);
  
  