function creatingSlider(title, imgFile, slideCaption, altStr, slideNo, display) {
    this.showTitle = title;
    this.imgLoc = imgFile;
    this.imgCaption = slideCaption;
    this.altData = altStr;
    this.slideNum = slideNo;
    this.displayStatus = display;

    // console.log(this.showTitle);
    return {
        showTitle,
        imgLoc,
        imgCaption,
        altData,
        slideNum,
        displayStatus
    }
}
// console.log(creatingSlider("ay"));

// function sliderManager() {}