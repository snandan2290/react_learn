import image1 from "../assets/images/image1.jpg";

import staticData from "../shared/constant/constantData";

console.log("staticData::", staticData);

const MyUImagesComp = () => {
  const checkEmptyData = (obj) => {
    console.log("obj::", Object.entries(obj).length);
    return Object.entries(obj).length === 0 ? false : true;
  };
  return (
    <div>
      <h2>My Images Component</h2>
      {/* using import image1 from "src/assets/image path */}
      <img src={image1} alt="This is sample"></img>
      <br></br>
      {/* Using public foleder image path */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/image2.jpg`}
        alt="This is sample"
      ></img>
      {/* Image using the link */}
      <img
        src="https://www.google.com/imgres?q=sample%20images%20for%20project&imgurl=https%3A%2F%2Fvenngage-wordpress.s3.amazonaws.com%2Fuploads%2F2018%2F05%2Fproject-plan-templates-8.png&imgrefurl=https%3A%2F%2Fvenngage.com%2Fblog%2Fproject-plan-template%2F&docid=XRE0eEdM1Pv73M&tbnid=G5LA0IXyknfNxM&vet=12ahUKEwjv__6X9JyLAxUaSWwGHaXTB7YQM3oECBsQAA..i&w=1056&h=816&hcb=2&ved=2ahUKEwjv__6X9JyLAxUaSWwGHaXTB7YQM3oECBsQAA"
        alt="Desc"
      ></img>
      <h2>Loading all assets as constantData</h2>
      {checkEmptyData(staticData.images) ? (
        <>
          <img src={staticData.images.image1} alt="This is sample image1"></img>
          <img
            src={staticData.images.image2}
            alt="This is sample umages2"
          ></img>
        </>
      ) : (
        <h2>No images found</h2>
      )}
      {checkEmptyData(staticData.Audios) ? (
        <>
          <img src={staticData.images.image1} alt="This is sample image1"></img>
          <img
            src={staticData.images.image2}
            alt="This is sample umages2"
          ></img>
        </>
      ) : (
        <h2>No Audios found</h2>
      )}
    </div>
  );
};

export default MyUImagesComp;
