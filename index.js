
let joonGrids = (numberOfImages, imageURLs, gridColumns) => {
  let imageGrid = document.querySelectorAll('.joonGrids');
  let images = [];
  let splitImageString = imageURLs.split(', ');
  let splitImageLength = splitImageString.length;

  if(imageGrid && numberOfImages > 1 && numberOfImages === splitImageString) {
    for(let i = 0; i < splitImageLength; i++) {
      images.push({
        image: splitImageString[i]
      })
    }
  }

  return images.map ( item => {
    return(
      <div className={`col-xs-12 col-sm-${gridColumns} col-md-${gridColumns} col-lg-${gridColumns}`}>
        <img src={item.image} alt=""/>
      </div>
    )
  })
};

module.exports.joonGrids = joonGrids;