
  let joonGrids = (imageURLs, gridColumns) => {
    let images = [];
    let splitImageString = imageURLs.split(", ");
    let splitImageLength = splitImageString.length;

    if (splitImageLength > 0) {
      for (let i = 0; i < splitImageLength; i++) {
        images.push({
          image: splitImageString[i]
        });
      }

      let finalImages = images.map(item => {
        return (
          <div
            className={`col-xs-12 col-sm-${gridColumns} col-md-${gridColumns} col-lg-${gridColumns}`}
          >
            <img className="img-responsive" src={item.image} alt="" />
          </div>
        );
      });

      return <div className="row">{finalImages}</div>;
    }
  }

module.exports.joonGrids = joonGrids;