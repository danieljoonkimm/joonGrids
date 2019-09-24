  joongrids = (
    options = { header, subHeader, columns: undefined, imageURLs: undefined, style: undefined }
  ) => {
    let header = options.header;
    let subHeader = options.subHeader;
    let columnNum = 12;
    
    if (options.columns === undefined || options.imageURLs === undefined) {
      let images = [];
      options.style = {
        marginBottom: '1em'
      }
      options.imageURLs =
        "https://dummyimage.com/600x400/000/fff, https://dummyimage.com/600x400/000/fff";
      options.columns = columnNum / options.columns;

      let splitImageString = options.imageURLs.split(", ");
      let splitImageLength = splitImageString.length;

      if (splitImageLength > 0) {
        for (let i = 0; i < splitImageLength; i++) {
          images.push({
            image: splitImageString[i]
          });
        }

        let finalImages = images.map((item, index) => {
          return (
            <div
              className={`col-xs-${12} col-sm-${columnNum /
                options.columns} col-md-${columnNum /
                options.columns} col-lg-${columnNum / options.columns}`}
                key={index}
            >
              <img className="img-responsive" src={item.image} alt="" style={options.style}/>
            </div>
          );
        });

        return <div className="row" style={{display: "flex"}}>{finalImages}</div>;
      }
    } else {
      let images = [];
      let splitImageString = options.imageURLs.split(", ");
      let splitImageLength = splitImageString.length;

      if (splitImageLength > 0) {
        for (let i = 0; i < splitImageLength; i++) {
          images.push({
            image: splitImageString[i]
          });
        }

        let finalImages = images.map((item, index) => {
          return (
            <div
              className={`col-xs-${12} col-sm-${columnNum /
                options.columns} col-md-${columnNum /
                options.columns} col-lg-${columnNum / options.columns}`}
                key={index}
            >
              <img
                className="img-responsive"
                src={item.image}
                alt=""
                style={options.style}
              />
            </div>
          );
        });

        return (
          <div className="row">
            <h1>{header}</h1>
            <h3>{subHeader}</h3>
            {finalImages}
          </div>
        );
      }
    }
  }
  

module.exports.joongrids = joongrids;